import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  static questions = [
    {
      imageUrl: 'https://d1f5hsy4d47upe.cloudfront.net/d0/d0f61ec5d8596bac08899ab9acdcd8e4_t.jpeg',
      answers: [
        {
          word: 'びーる',
          isAnswer: true,
        },
        {
          word: 'びあー',
          isAnswer: false,
        },
        {
          word: 'ぼあー',
          isAnswer: false,
        },
        {
          word: 'ぼーる',
          isAnswer: false,
        },
      ],
    },
    {
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

  constructor() { }
}
