import { ApiProperty } from '@nestjs/swagger';

export class HelloDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  age: number;
}
