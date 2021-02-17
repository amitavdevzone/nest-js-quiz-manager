import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  quizId: number;

  @IsNotEmpty()
  question: string;
}
