import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import puppeteer from 'puppeteer';
import { HTMLToPDFDto } from './html-to-pdf.dto';
import { IGeneratePDFfromHTML } from './html-to-pdf.interface';
import * as fs from 'fs';



@Injectable()
export class HtmlToPdfService {

  private readonly outputPath: string

  constructor() {
    this.outputPath = join(process.cwd(), `src/components/html-to-pdf/pdf/custom-${uuidv4()}.pdf`)
  }

  public async generate(htmlContent: HTMLToPDFDto) {
    try {
      try {
        await this.generatePDFfromHTML({ htmlContent: htmlContent.data })
        return fs.createReadStream(this.outputPath)
      } catch (error) {
        throw new HttpException('Error to generate PDF', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException('Error to generate PDF', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  private async generatePDFfromHTML({
    htmlContent
  }: IGeneratePDFfromHTML) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({ path: this.outputPath, format: 'A4' });
    await browser.close();
  }

}
