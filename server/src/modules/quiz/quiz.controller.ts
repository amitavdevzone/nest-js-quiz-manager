import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }
}
