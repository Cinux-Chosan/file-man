import { Test, TestingModule } from '@nestjs/testing';
import { FilemanService } from './fileman.service';

describe('FilemanService', () => {
  let service: FilemanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilemanService],
    }).compile();

    service = module.get<FilemanService>(FilemanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
