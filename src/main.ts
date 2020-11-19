import { NestFactory } from '@nestjs/core';
import { HelloModule } from './modules/hello/hello.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloModule);
  await app.listen(8088);
}
bootstrap();
