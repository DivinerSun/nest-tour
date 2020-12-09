import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guards';

@Controller('guards')
export class GuardsController {
  @Get()
  @UseGuards(AuthGuard)
  getOne(): string {
    return `This action is Guards`;
  }
}
