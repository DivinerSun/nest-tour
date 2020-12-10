import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('Interceptor --- Before......');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`Interceptor --- After... ${Date.now() - now}ms`),
        ),
      );
  }
}
