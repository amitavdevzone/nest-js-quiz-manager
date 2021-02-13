import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Get('/')
  getAllQuiz() {
    return [1, 2, 3];
  }
}
