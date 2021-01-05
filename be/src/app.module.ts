import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilemanModule } from './fileman/fileman.module';

@Module({
  imports: [FilemanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
