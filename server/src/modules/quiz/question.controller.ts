import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConnectionManager } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuizService } from './quiz.service';

@Controller('question')
export class QuestionController {
  constructor(private quizService: QuizService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(question.quizId);
    const que = await this.quizService.createQuestion(question, quiz);
    return { que, quiz };
  }
}
