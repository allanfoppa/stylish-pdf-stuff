import { IsNotEmpty } from 'class-validator';

export class HTMLToPDFDto {
  @IsNotEmpty()
  data: string;
}
