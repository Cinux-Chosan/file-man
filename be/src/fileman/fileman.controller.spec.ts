import { Test, TestingModule } from '@nestjs/testing';
import { FilemanController } from './fileman.controller';

describe('FilemanController', () => {
  let controller: FilemanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilemanController],
    }).compile();

    controller = module.get<FilemanController>(FilemanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
