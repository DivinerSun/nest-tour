import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { HelloService } from './hello.service';

interface User {
  readonly name: string;
  readonly age: number;
}

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get(':id')
  getHelloOne(@Param('id') id: number): string {
    return this.helloService.getHelloOne(id);
  }

  @Post()
  createHelloOne(@Body() user: User): string {
    const { name, age } = user;
    return this.helloService.createHelloOne(name, age);
  }

  @Patch()
  updateHelloOne(@Query('id') id: number): string {
    return this.helloService.updateHelloOne(id);
  }

  @Delete(':id')
  deleteHelloOne(@Param('id') id: number): string {
    return this.helloService.deleteHelloOne(id);
  }
}
