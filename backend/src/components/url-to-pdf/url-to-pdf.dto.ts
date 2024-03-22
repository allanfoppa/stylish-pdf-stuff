import { IsNotEmpty } from 'class-validator';

export class URLToPDFDto {
  @IsNotEmpty()
  data: string;
}
