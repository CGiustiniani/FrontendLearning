import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { InterceptorMonitorService } from './interceptor-monitor.service';
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [InterceptorService, InterceptorMonitorService,
   /* {provide: HTTP_INTERCEPTORS, useClass: ..., multi: true}
   */
   ]
})
export class AppModule { }