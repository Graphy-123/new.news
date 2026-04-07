import { Injectable } from '@nestjs/common';
import { MeiliSearch } from 'meilisearch';

@Injectable()
export class MeiliService {
  private client = new MeiliSearch({
    host: process.env.MEILI_HOST || 'http://localhost:7700',
    apiKey: process.env.MEILI_KEY || 'masterKey',
  });

  async indexArticle(article: any) {
    const index = this.client.index('articles');
    return index.addDocuments([article]);
  }

  async search(query: string) {
    const index = this.client.index('articles');
    return index.search(query);
  }
}
