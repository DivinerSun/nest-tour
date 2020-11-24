import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Redirect,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { Cat } from './cats.interface';
import { CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('list')
  async findList(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async createOne(createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log('createCatDto: ', createCatDto);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  // 状态码测试
  @Get('testStatusCode')
  @HttpCode(403)
  testStatusCode(): string {
    return 'This action is custom status code';
  }

  // 路由通配符测试
  @Get('a*b*cc')
  testWilcards(@Req() req: Request): string {
    return `This action request url is ${req.url}`;
  }

  // 异步
  @Get('async')
  async testAsync(): Promise<[]> {
    return [];
  }

  @Get('redirect')
  @Redirect('https://www.diviner.site')
  redirect(): void {
    ('');
  }

  @Get('express')
  testExpress(@Req() req: Request): any {
    return {
      hostname: req.hostname,
      ip: req.ip,
      headers: req.headers,
      url: req.url,
      method: req.method,
      params: req.params,
      query: req.query,
      body: req.body,
    };
  }
}
