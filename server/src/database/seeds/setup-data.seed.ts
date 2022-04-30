import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Option } from '../../modules/quiz/entities/option.entity';
import { Question } from '../../modules/quiz/entities/question.entity';
import { Quiz } from '../../modules/quiz/entities/quiz.entity';
import { quizSampleData } from '../data/quiz.data';

export class SetupData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    console.log('quizSampleData', quizSampleData);
    await getManager().query('SET foreign_key_checks = 0');
    await getManager().query('TRUNCATE quizes');
    await getManager().query('TRUNCATE questions');
    await getManager().query('TRUNCATE options');
    await getManager().query('SET foreign_key_checks = 1');

    for (let i = 0; i < quizSampleData.length; i++) {
      const { quizTitle, quizDescription, questions } = quizSampleData[i];

      const quiz = new Quiz();
      quiz.title = quizTitle;
      quiz.description = quizDescription;
      await quiz.save();

      for (let j = 0; j < questions.length; j++) {
        const { question, options } = questions[j];

        const que = new Question();
        que.question = question;
        que.quiz = quiz;
        await que.save();

        for (let k = 0; k < options.length; k++) {
          const { isCorrect, text } = options[k];
          const opt = new Option();
          opt.isCorrect = isCorrect;
          opt.text = text;
          opt.question = que;
          await opt.save();
        }
      }
    }
  }
}
