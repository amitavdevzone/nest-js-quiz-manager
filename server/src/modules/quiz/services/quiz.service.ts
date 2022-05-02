import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { events } from '../../../common/constants/event.constants';

import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { ResponseAddEvent } from '../events/response-add.event';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
    const qb = this.quizRepository.createQueryBuilder('q');
    qb.orderBy('q.id', 'DESC');

    return paginate<Quiz>(qb, options);
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, {
      relations: ['questions', 'questions.options'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  @OnEvent(events.RESPONSE_SUBMITTED)
  checkQuizCompeleted(payload: ResponseAddEvent) {
    console.log('checkQuizCompeleted', payload);
  }
}
