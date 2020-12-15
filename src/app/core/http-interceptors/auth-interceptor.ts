import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { defaultHTTPHeaders } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
    if (!environment.production) {
      // log warning message only in dev mode and only once
      console.warn(
        '[AuthInterceptor] HTTP request method has been modified to GET for development only.'
      );
    }
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (environment.production) {
      req = this.getClonedReqForProd(req); // PROD
    } else {
      req = this.getClonedReqForDevelopment(req); // DEVELOPMENT ONLY ***
    }
    return next.handle(req);
  }

  getClonedReqForDevelopment(r: HttpRequest<any>): HttpRequest<any> {
    return r.clone({
      method: 'GET',
      headers: this.getHeaders(r.headers),
      params: r.params,
    });
  }

  getClonedReqForProd(r: HttpRequest<any>): HttpRequest<any> {
    return r.clone({
      headers: this.getHeaders(r.headers),
      params: r.params,
      withCredentials: true,
    });
  }

  getHeaders(reqHdrs: HttpHeaders): HttpHeaders {
    return new HttpHeaders(
      Object.assign({}, defaultHTTPHeaders, this.getPassedHeaders(reqHdrs))
    );
  }

  getPassedHeaders(hdrs: HttpHeaders): object {
    const temp = {};
    if (hdrs && hdrs.keys().length > 0) {
      hdrs.keys().forEach((h) => {
        temp[h] = hdrs.get(h);
      });
    }
    return temp;
  }
}
