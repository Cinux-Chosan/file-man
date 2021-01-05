import { Module } from '@nestjs/common';
import { FilemanController } from './fileman.controller';
import { FilemanService } from './fileman.service';

@Module({
  controllers: [FilemanController],
  providers: [FilemanService]
})
export class FilemanModule {}
