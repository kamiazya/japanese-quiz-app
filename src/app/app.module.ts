import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    QuestionPageComponent,
    ResultPageComponent,
    QuizPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
