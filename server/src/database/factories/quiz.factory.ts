import { randDatabaseColumn, randParagraph, randSentence } from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { Quiz } from '../../modules/quiz/entities/quiz.entity';

define(Quiz, () => {
  const quiz = new Quiz();
  quiz.title = randSentence();
  quiz.description = randParagraph();
  return quiz;
});
