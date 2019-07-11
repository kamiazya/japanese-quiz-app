import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'q',
    component: QuizPageComponent,
    children: [
      {
        path: ':number',
        component: QuestionPageComponent,
      },
      {
        path: 'result',
        component: ResultPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
