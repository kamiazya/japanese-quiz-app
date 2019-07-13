import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Observable } from 'rxjs';

interface Result {
  number: number;
  imageURL: string;
  userAnswerWord: string;
  userAnswerYomi?: string;
  quizAnserWord: string;
  quizAnserYomi?: string;
  result: boolean;
}

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  questions = QuizService.questions;

  constructor(
    private quiz: QuizService,
  ) { }

  public results: Result[];
  public correctAnswerCount: number;
  public correctAnswerRate: number;
  private speechSynthesis: SpeechSynthesis = window.speechSynthesis;

  ngOnInit() {
    this.results = this.quiz.userAnswers.map(a => {
      const question = this.questions.find(q => q.number === a.number);
      const quizAnswer = question.answers.find(answer => answer.isAnswer);
      return {
        number: a.number,
        imageURL: question.imageUrl,
        userAnswerWord: a.word,
        userAnswerYomi: a.yomi,
        quizAnserWord: quizAnswer.word,
        quizAnserYomi: quizAnswer.yomi,
        result: a.isAnswer,
      };
    });

    this.correctAnswerCount = this.results.filter(r => r.result).length;
    this.correctAnswerRate = this.correctAnswerCount / this.results.length;
  }


  speak(text: string) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja';
    u.rate = 0.9;
    this.speechSynthesis.speak(u);
  }
}
