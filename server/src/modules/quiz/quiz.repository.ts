import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {}
