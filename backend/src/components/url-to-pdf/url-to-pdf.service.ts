import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { URLToPDFDto } from './url-to-pdf.dto';
import puppeteer from 'puppeteer';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class UrlToPdfService {

  private readonly outputPath: string

  constructor() {
    this.outputPath = join(process.cwd(), `src/components/url-to-pdf/pdf/custom-${uuidv4()}.pdf`)
  }

  public async generate(address: URLToPDFDto) {
    try {
      try {
        await this.generatePDFfromURL({ url: address.data  })
        return fs.createReadStream(this.outputPath)
      } catch (error) {
        throw new HttpException('Error to generate PDF', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException('Error to generate PDF', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async generatePDFfromURL({ url }) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.pdf({ path: this.outputPath, format: 'A4' });
    await browser.close();
  }

}
