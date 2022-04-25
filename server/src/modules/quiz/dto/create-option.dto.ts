import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @ApiProperty({
    description: 'The option for a question',
    example: 'Owl',
  })
  @IsNotEmpty()
  @Length(2, 255)
  text: string;

  @ApiProperty({
    description: 'The ID of the question',
    example: 1,
  })
  @IsNotEmpty()
  questionId: number;

  @ApiProperty({
    description: 'Whether the option is correct or not',
    example: true,
  })
  @IsNotEmpty()
  isCorrect: boolean;
}
