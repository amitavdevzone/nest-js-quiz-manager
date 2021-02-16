import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService],
})
export class QuizModule {}
