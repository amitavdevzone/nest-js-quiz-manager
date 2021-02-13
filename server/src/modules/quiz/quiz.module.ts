import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';

@Module({
  controllers: [QuizController],
})
export class QuizModule {}
