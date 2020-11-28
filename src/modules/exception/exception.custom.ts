import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(num: string) {
    switch (num) {
      case '1':
        super('FORBIDDEN', HttpStatus.FORBIDDEN);
        break;
      case '2':
        super('NOT_FOUND', HttpStatus.NOT_FOUND);
        break;
      case '3':
        super('METHOD_NOT_ALLOWED', HttpStatus.METHOD_NOT_ALLOWED);
        break;
      case '5':
        super('INTERNAL_SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
        break;

      default:
        super('FORBIDDEN', HttpStatus.FORBIDDEN);
        break;
    }
  }
}
