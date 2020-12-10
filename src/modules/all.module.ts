import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { ExceptionModule } from './exception/exception.module';
import { GuardsModule } from './guards/guards.module';
import { HelloModule } from './hello/hello.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [
    HelloModule,
    CatsModule,
    ExceptionModule,
    PipesModule,
    GuardsModule,
    InterceptorsModule,
  ],
})
export class AllModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
