interface ISampleData {
  quizTitle: string;
  quizDescription: string;
  questions: Array<IQuestionData>;
}

interface IQuestionData {
  question: string;
  options: Array<{ text: string; isCorrect: boolean }>;
}

export const quizSampleData: Array<ISampleData> = [
  {
    quizTitle: 'Laravel beginner level quiz',
    quizDescription:
      'In this quiz, you are going to be asked some basic questions which will target your knowledge of Laravel',
    questions: [
      {
        question: 'How to put Laravel applications in maintenance mode?',
        options: [
          { text: 'php artisan maintenance:on', isCorrect: false },
          { text: 'php artisan down', isCorrect: true },
          { text: 'php artisan maintenance:up', isCorrect: false },
          { text: 'php artisan maintenance:down', isCorrect: false },
        ],
      },
      {
        question: 'What is the role of Service provider?',
        options: [
          {
            text: 'They allow Laravel to know about the packages which are present and how to bootstrap them',
            isCorrect: true,
          },
          {
            text: 'They allow Laravel to provide services for individual modules',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    quizTitle: 'React Js beginner level quiz',
    quizDescription:
      'In this quiz, you are going to be asked some basic questions which will target your knowledge of React Js',
    questions: [
      {
        question: 'How to put Laravel applications in maintenance mode?',
        options: [
          { text: 'php artisan maintenance:on', isCorrect: false },
          { text: 'php artisan down', isCorrect: true },
          { text: 'php artisan maintenance:up', isCorrect: false },
          { text: 'php artisan maintenance:down', isCorrect: false },
        ],
      },
    ],
  },
];
