import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ResponseCode } from '../../common/ResponseCode';
import { CustomException } from './exception.custom';

@Controller('exception')
export class ExceptionController {
  @Get()
  async find(): Promise<void> {
    throw new HttpException('您没有访问权限', HttpStatus.FORBIDDEN);
  }

  @Get('a')
  async testA(): Promise<void> {
    throw new HttpException(
      {
        code: ResponseCode.METHOD_NOT_ALLOWED,
        message: '请求方法不正确',
      },
      HttpStatus.OK,
    );
  }

  @Get('b')
  async testB(): Promise<void> {
    throw new HttpException(
      {
        code: ResponseCode.NOT_LOGIN,
        message: '请先登录',
      },
      HttpStatus.OK,
    );
  }

  @Get('c')
  async testC(): Promise<void> {
    throw new HttpException(
      {
        code: ResponseCode.SUCCESS,
        message: '成功',
      },
      HttpStatus.OK,
    );
  }

  @Get('d')
  async testD(): Promise<void> {
    throw new HttpException(
      {
        code: ResponseCode.ERROR,
        message: '出错了',
      },
      HttpStatus.OK,
    );
  }

  @Get('custom')
  async testCustom(@Query('id') id: string): Promise<void> {
    throw new CustomException(id);
  }
}
