import { Injectable } from '@angular/core';


export interface Answer {
  word: string;
  yomi?: string;
  isAnswer: boolean;
}

export type AnswerWithNumber = Answer & {
  number: number;
};

export interface Question {
  number: number;
  imageUrl: string;
  answers: Answer[];
}

@Injectable()
export class QuizService {

  static questions: Question[] = [
    {
      number: 1,
      imageUrl: 'https://d1f5hsy4d47upe.cloudfront.net/d0/d0f61ec5d8596bac08899ab9acdcd8e4_t.jpeg',
      answers: [
        {
          word: 'びーる',
          yomi: 'びいる',
          isAnswer: true,
        },
        {
          word: 'びあー',
          yomi: 'びあー',
          isAnswer: false,
        },
        {
          word: 'ぼあー',
          yomi: 'ぼあー',
          isAnswer: false,
        },
        {
          word: 'ぼーる',
          yomi: 'ぼおる',
          isAnswer: false,
        },
      ],
    },
    {
      number: 2,
      imageUrl: 'https://image.news.livedoor.com/newsimage/stf/7/1/710b0_1443_96ea2b3f_180421ef.jpg',
      answers: [
        {
          word: 'とまと',
          isAnswer: true,
        },
        {
          word: 'まとま',
          isAnswer: false,
        },
        {
          word: 'ままと',
          isAnswer: false,
        },
        {
          word: 'ととま',
          isAnswer: false,
        },
      ],
    },
  ];

  public userAnswers: AnswerWithNumber[] = [];

  constructor() { }

  answer(n: number, answer: Answer): boolean {
    this.userAnswers.push({ ...answer, number: n });
    return answer.isAnswer;
  }
}
