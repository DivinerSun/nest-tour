import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [HelloModule, CatsModule],
})
export class AllModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
