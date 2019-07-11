import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  providers: [
    QuizService,
  ]
})
export class QuizPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
