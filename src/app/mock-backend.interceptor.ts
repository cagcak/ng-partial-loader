import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable()
export class HttpMockBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return timer(100).pipe(
      switchMap(() =>
        import(`../assets/data/${request.url}.json`).then((value) => {
          if (value) {
            return new HttpResponse({
              status: 200,
              headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
              }),
              body: (value as any).default,
            });
          } else {
            return next.handle(request);
          }
        })
      )
    ) as Observable<HttpResponse<any>>;
  }
}
