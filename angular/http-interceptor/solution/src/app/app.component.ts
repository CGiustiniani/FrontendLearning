import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterceptorMonitorService } from './interceptor-monitor.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  state: boolean;
  constructor(private http: HttpClient, private monitor: InterceptorMonitorService) { }
  onRequest() {
    this.http.get('/').subscribe(_ => {
      console.log('Http Request executed');
    });
  }
  ngOnInit() {
    this.monitor.event.subscribe((state) => {
      this.state = state;
    });
  }
}
