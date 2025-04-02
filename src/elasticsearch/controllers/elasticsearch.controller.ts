import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ElasticsearchService } from '../services/elasticsearch.service';

@Controller('search')
export class ElasticsearchController {
  constructor(private readonly esService: ElasticsearchService) {}

  @Post('index/:index/:id')
  async indexDocument(
    @Param('index') index: string,
    @Param('id') id: string,
    @Body() body: any
  ) {
    return this.esService.indexDocument(index, id, body);
  }

  @Get(':index')
  async search(@Param('index') index: string, @Body() query: any) {
    return this.esService.search(index, query);
  }

  @Delete(':index/:id')
  async deleteDocument(@Param('index') index: string, @Param('id') id: string) {
    return this.esService.deleteDocument(index, id);
  }
}
