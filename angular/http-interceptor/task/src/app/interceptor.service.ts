import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { InterceptorMonitorService } from './interceptor-monitor.service';

@Injectable()
export class InterceptorService {

  constructor(private monitor: InterceptorMonitorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // The request begins - call the monitor

    /* Add the Http Header */
    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          // The request has been finished here - call the monitor
        }, 1000);
      })
    );
  }

}