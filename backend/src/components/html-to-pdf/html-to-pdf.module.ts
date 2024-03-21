import { Module } from '@nestjs/common';
import { HtmlToPdfController } from './html-to-pdf.controller';
import { HtmlToPdfService } from './html-to-pdf.service';

@Module({
  controllers: [HtmlToPdfController],
  providers: [HtmlToPdfService]
})
export class HtmlToPdfModule {}
