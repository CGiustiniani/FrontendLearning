import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InterceptorMonitorService {
  event: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  start(): void {
    this.event.next(true);
  }
  stop(): void {
    this.event.next(false);
  }
}