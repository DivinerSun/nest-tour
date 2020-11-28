import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/HttpExceptionFilter';
import { AllModule } from './modules/all.module';

async function bootstrap() {
  const app = await NestFactory.create(AllModule);

  // 全局使用自定义异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 进行swagger相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('NestJS接口文档')
    .setDescription('NestJS学习接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, doc);

  await app.listen(8088);
}
bootstrap();
