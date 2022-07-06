import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';

/**
 * Prefixes all requests with `environment.api_url`.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepted request to ', request.url);

    if (!/^(http|https):/i.test(request.url)) {

      console.log('prefixing it');

      request = request.clone({url: environment.api_url + request.url});

      console.log('new path ', request.url);
    }
    return next.handle(request);
  }
}
