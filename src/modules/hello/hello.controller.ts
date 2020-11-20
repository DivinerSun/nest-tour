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
import { ApiTags, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';
import { HelloService } from './hello.service';
import { HelloDTO } from './hello.dto';

@ApiTags('hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }

  @ApiParam({ name: 'id' })
  @Get(':id')
  getHelloOne(@Param('id') id: number): string {
    return this.helloService.getHelloOne(id);
  }

  @ApiBody({ description: '填写id和age', type: HelloDTO })
  @Post()
  createHelloOne(@Body() hello: HelloDTO): string {
    const { id, age } = hello;
    return this.helloService.createHelloOne(id, age);
  }

  @ApiQuery({
    name: 'id',
    allowEmptyValue: false,
    description: '请填写数据id',
    required: true,
  })
  @Patch()
  updateHelloOne(@Query('id') id: number): string {
    return this.helloService.updateHelloOne(id);
  }

  @ApiParam({
    name: 'id',
    allowEmptyValue: false,
    description: '请填写数据id',
    required: true,
  })
  @Delete(':id')
  deleteHelloOne(@Param('id') id: number): string {
    return this.helloService.deleteHelloOne(id);
  }
}
