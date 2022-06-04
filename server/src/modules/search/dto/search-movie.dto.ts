import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class SearchMovieDto {
  @ApiProperty({
    description: 'The name of the movie that you want to search',
    example: 'wo',
  })
  @IsNotEmpty()
  @Length(2, 255)
  text: string;
}
