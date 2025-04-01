import { Injectable, Logger } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  private readonly logger = new Logger(ElasticsearchService.name);
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      node: 'http://localhost:9200', // Replace with your ES cluster URL
    });
  }

  async createIndex(index: string): Promise<void> {
    const exists = await this.client.indices.exists({ index });
    if (!exists) {
      await this.client.indices.create({ index });
      this.logger.log(`Index '${index}' created`);
    }
  }

  async indexDocument(index: string, id: string, body: any) {
    await this.client.index({
      index,
      id,
      body,
    });
    this.logger.log(`Document ${id} indexed in ${index}`);
  }

  async search(index: string, query: any) {
    const { body } = await this.client.search({
      index,
      body: {
        query,
      },
    });
    return body.hits.hits;
  }

  async deleteDocument(index: string, id: string) {
    await this.client.delete({ index, id });
    this.logger.log(`Document ${id} deleted from ${index}`);
  }
}
