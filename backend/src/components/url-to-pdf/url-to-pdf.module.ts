import { Module } from '@nestjs/common';
import { UrlToPdfController } from './url-to-pdf.controller';
import { UrlToPdfService } from './url-to-pdf.service';

@Module({
  controllers: [UrlToPdfController],
  providers: [UrlToPdfService]
})
export class UrlToPdfModule {}
