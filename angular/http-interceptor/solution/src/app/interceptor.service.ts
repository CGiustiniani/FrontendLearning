import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { InterceptorMonitorService } from './interceptor-monitor.service';

@Injectable()
export class InterceptorService {

  constructor(private monitor: InterceptorMonitorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.monitor.start();

     let headers = req.headers.set('authentication', 'authentication');

     const authReq = req.clone({headers: headers});
    return next.handle(authReq).pipe(
      finalize(() => {
        setTimeout(() => {
          this.monitor.stop();
        }, 1000);
      })
    );
  }

}