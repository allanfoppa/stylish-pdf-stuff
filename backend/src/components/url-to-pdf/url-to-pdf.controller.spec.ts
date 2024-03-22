import { Test, TestingModule } from '@nestjs/testing';
import { UrlToPdfController } from './url-to-pdf.controller';

describe('UrlToPdfController', () => {
  let controller: UrlToPdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlToPdfController],
    }).compile();

    controller = module.get<UrlToPdfController>(UrlToPdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
