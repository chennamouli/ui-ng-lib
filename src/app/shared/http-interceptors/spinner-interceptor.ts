import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private sn: SpinnerService) {}

  // keep track of requests which are in progress
  private inProgressReqs = new Map();

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.sn.publishReqInProgress(true);
    this.inProgressReqs.set(req.method + req.urlWithParams, req.url); // add to map before request start
    return next.handle(req).pipe(
      // Log when response observable either completes or errors
      finalize(() => {
        this.inProgressReqs.delete(req.method + req.urlWithParams); // delete from map after request is done
        if (this.inProgressReqs.size === 0) {
          this.sn.publishReqInProgress(false);
        }
      })
    );
  }
}
