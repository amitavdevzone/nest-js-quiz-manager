import { Module } from '@nestjs/common';
import { SearchController } from './controllers/search.controller';
import { SearchService } from './search.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
