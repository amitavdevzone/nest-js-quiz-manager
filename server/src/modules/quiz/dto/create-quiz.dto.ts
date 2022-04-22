import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @ApiProperty({
    description: 'The title of the quiz',
    example: 'How good are your with Laravel?',
  })
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;

  @ApiProperty({
    description: 'A small description for the user',
    example:
      'This quiz will ask your questions on Laravel and test your knowledge.',
  })
  @IsNotEmpty()
  @Length(3)
  description: string;
}
