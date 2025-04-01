import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from './elasticsearch/modules/elasticsearch.module';

@Module({
  imports: [ElasticsearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
