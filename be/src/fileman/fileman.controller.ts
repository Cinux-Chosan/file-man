import { Controller, Get, Query } from '@nestjs/common';
import { FilemanService } from './fileman.service';

@Controller()
export class FilemanController {
  constructor(private fmService: FilemanService) {}

  @Get('files')
  readDir(@Query('dir') dir: string) {
    return this.fmService.readDir(dir);
  }
}
