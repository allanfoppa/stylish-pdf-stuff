import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlToPdfModule } from './components/html-to-pdf/html-to-pdf.module';
import { UrlToPdfModule } from './components/url-to-pdf/url-to-pdf.module';

@Module({
  imports: [HtmlToPdfModule, UrlToPdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
