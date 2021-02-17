import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
    @InjectRepository(QuestionRepository)
    private questionRepositry: QuestionRepository,
  ) {}

  getAllQuiz() {
    return [1, 2, 3, 4, 'From the service'];
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, { relations: ['questions'] });
  }

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQue = await this.questionRepositry.save({
      question: question.question,
    });
    quiz.questions = [...quiz.questions, newQue];
    await quiz.save();

    return newQue;
  }
}
