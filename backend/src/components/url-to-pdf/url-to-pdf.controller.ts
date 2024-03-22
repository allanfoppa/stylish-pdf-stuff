import { Body, Controller, HttpException, HttpStatus, Inject, Post, Res, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { isUrl } from 'check-valid-url';
import { URLToPDFDto } from './url-to-pdf.dto';
import { UrlToPdfService } from './url-to-pdf.service';

@Controller('url-to-pdf')
export class UrlToPdfController {

  constructor(
    @Inject(UrlToPdfService) private readonly urlToPdfService: UrlToPdfService
  ) {}

  @Post('generate')
  public async generatePdf(
    @Body(ValidationPipe) data: URLToPDFDto,
    @Res() res: Response
  ): Promise<any> {
    try {
      const isValidUrl = isUrl(data.data)

      if (isValidUrl) {
        const pdfBuffer = await this.urlToPdfService.generate(data)
        res
          .set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="example.pdf"`,
          });

        return pdfBuffer.pipe(res)
      } else {
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: 'Invalid URL address' });
      }

    } catch (error) {
      console.error('Error processing string:', error);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
