import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CustomValidationPipe } from './pepes.custom';

@Controller('pipes')
export class PipesController {
  @Get(':id')
  find(
    @Param('id', ParseIntPipe) id: number,
    @Query('age', ParseIntPipe) age: number,
  ): string {
    return `id = ${id} and id's type is: ${typeof id} --- age = ${age} and age's type is: ${typeof age}`;
  }

  @Get(':id/custom')
  custom(@Query('id', CustomValidationPipe) id: string): string {
    return `查询参数： ${id}`;
  }
}
