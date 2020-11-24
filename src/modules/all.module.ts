import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [HelloModule, CatsModule],
})
export class AllModule {}
