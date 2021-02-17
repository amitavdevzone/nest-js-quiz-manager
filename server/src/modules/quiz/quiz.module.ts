import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { QuestionRepository } from './question.repository';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository])],
  providers: [QuizService],
})
export class QuizModule {}
