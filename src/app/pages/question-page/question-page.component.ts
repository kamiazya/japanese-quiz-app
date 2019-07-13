import { map, shareReplay, take, filter } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService, Question, Answer } from 'src/app/services/quiz.service';
import { Observable, ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  private speechSynthesis: SpeechSynthesis = window.speechSynthesis;

  constructor(
    private quiz: QuizService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  number$: Observable<number>;

  question$: Observable<Question>;

  result$ = new ReplaySubject<boolean | null>(1);

  ngOnInit() {
    this.number$ = this.route.params.pipe(
      map(param => +param.number),
      shareReplay(1),
    );

    this.question$ = this.number$.pipe(
      map(n => QuizService.questions.find(q => q.number === n)),
      shareReplay(1),
    );

    this.subscription.add(
      this.number$.subscribe(() => this.result$.next(null)));

    this.subscription.add(
      this.result$
        .pipe(
          filter(result => typeof result === 'boolean'),
      ).subscribe((result) => this.speak(result ? '正解' : 'ハズレ')));

    this.subscription
      .add(this.question$.subscribe(() => this.speak('写真に写っているものは日本語でなんと読むでしょうか?')));
  }

  speak(text: string) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja';
    u.rate = 0.9;
    this.speechSynthesis.speak(u);
  }

  async clickCard(answer: Answer) {
    const result = await this.result$.pipe(take(1)).toPromise();
    if (result === null) {
      const n = await this.number$.pipe(take(1)).toPromise();
      this.result$.next(this.quiz.answer(n, answer));
    } else {
      this.speak(answer.yomi || answer.word);
    }
  }

  async goNext() {
    const n = await this.number$.pipe(take(1)).toPromise();
    const nextNumber = n + 1;
    const question = QuizService.questions.find(q => q.number === nextNumber);
    if (question) {
      this.router.navigate(['q', question.number]);
    } else {
      this.router.navigate(['q', 'result']);
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
