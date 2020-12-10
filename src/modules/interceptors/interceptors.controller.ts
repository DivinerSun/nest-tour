import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { CustomInterceptor } from './interceptors.custom';
import { UserEntity } from './user.dto';

@Controller('intercept')
export class InterceptorsController {
  @Get(':id')
  @UseInterceptors(CustomInterceptor)
  find(@Param('id') id: number): string {
    return `id = ${id} and id's type is: ${typeof id}`;
  }

  @Get()
  getUser(@User('user') user: UserEntity) {
    console.log(222222, user);
    return 'User';
  }
}
