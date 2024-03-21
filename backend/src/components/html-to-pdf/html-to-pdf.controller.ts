import { Body, Controller, HttpException, HttpStatus, Inject, Post, Res, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { HTMLToPDFDto } from './html-to-pdf.dto';
import { HtmlToPdfService } from './html-to-pdf.service';

@Controller('html-to-pdf')
export class HtmlToPdfController {

  constructor(
    @Inject(HtmlToPdfService) private readonly htmlToPdfService: HtmlToPdfService
  ) {}

  @Post()
  async generatePdf(
    @Body(ValidationPipe) data: HTMLToPDFDto,
    @Res() res: Response
  ): Promise<any> {
    try {
      const pdfBuffer = await this.htmlToPdfService.generate(data)

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="example.pdf"`,
      });

      pdfBuffer.pipe(res)
    } catch (error) {
      console.error('Error processing string:', error);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
