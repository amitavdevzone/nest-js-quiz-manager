import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
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
  }
}
