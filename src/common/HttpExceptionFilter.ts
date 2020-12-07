import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ResponseCode } from './ResponseCode';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const exRes = {
      code: ResponseCode.SUCCESS,
      message: '成功',
    };
    switch (status) {
      case 400:
        exRes.code = ResponseCode.PARAMETER_ERROR;
        exRes.message = '请求参数类型错误';
        break;
      case 403:
        exRes.code = ResponseCode.PERMISSION_ERROR;
        exRes.message = '您没有访问权限';
        break;
      case 404:
        exRes.code = ResponseCode.NOT_FOUND;
        exRes.message = '请求地址不存在';
        break;
      case 405:
        exRes.code = ResponseCode.METHOD_NOT_ALLOWED;
        exRes.message = '请求方法不正确';
        break;
      case 500:
        exRes.code = ResponseCode.ERROR;
        exRes.message = '服务器开小差了';
        break;

      default:
        break;
    }

    res.status(200).json({
      ...exRes,
      method: req.method,
      path: req.url,
      timestamp: new Date().getTime(),
    });
  }
}
