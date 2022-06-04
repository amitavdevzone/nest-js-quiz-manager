import { Injectable } from '@nestjs/common';
import MeiliSearch, { Index, SearchParams } from 'meilisearch';

@Injectable()
export class SearchService {
  private _client: MeiliSearch;
  constructor() {
    this._client = new MeiliSearch({
      host: 'http://192.168.1.141:7700/',
    });
  }

  private getMovieIndex(): Index {
    return this._client.index('movies');
  }

  public async addDocuments(documents) {
    const index = this.getMovieIndex();
    return await index.addDocuments(documents);
  }

  public async search(text: string, searchParams?: SearchParams) {
    console.log(searchParams);
    const index = this.getMovieIndex();
    return await index.search(text, searchParams);
  }
}
