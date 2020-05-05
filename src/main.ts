// eslint-disable-next-line node/no-unpublished-import
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, `../${process.env.NODE_ENV}.env`) });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
