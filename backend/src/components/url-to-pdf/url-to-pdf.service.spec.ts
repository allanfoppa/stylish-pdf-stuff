import { Test, TestingModule } from '@nestjs/testing';
import { UrlToPdfService } from './url-to-pdf.service';

describe('UrlToPdfService', () => {
  let service: UrlToPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlToPdfService],
    }).compile();

    service = module.get<UrlToPdfService>(UrlToPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
