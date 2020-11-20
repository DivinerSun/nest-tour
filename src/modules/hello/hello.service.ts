import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello NestJS';
  }

  getHelloOne(id: number): string {
    return `GET Hello One： ${id}`;
  }

  createHelloOne(id: string, age: number): string {
    return `Create Hello One：id-${id}::age-${age}`;
  }

  updateHelloOne(id: number): string {
    return `Update Hello One：id-${id}`;
  }

  deleteHelloOne(id: number): string {
    return `Delete Hello One：${id}`;
  }
}
