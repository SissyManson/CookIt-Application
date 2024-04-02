import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

const { apiUrl } = environment;

@Injectable()
export class ApInterceptor implements HttpInterceptor {
  API = '/api';
  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.API)) {
      req = req.clone({
        url: req.url.replace(this.API, apiUrl),
        withCredentials: true,
      });
    }
    console.log('Intercepted url: ', req.url);

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/home']);
        } else {
          this.errorService.setError(err);
          this.router.navigate(['/error']);
        }
        return [err];
      })
    );
  }
}
export const appInterceptorProvider: Provider = {
  useClass: ApInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
