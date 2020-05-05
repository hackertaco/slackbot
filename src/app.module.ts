/* eslint-disable node/no-unpublished-import */
import { Module } from '@nestjs/common';
import { UserService } from './service';
import { AppController } from './controllers/app.controller';

@Module({
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
