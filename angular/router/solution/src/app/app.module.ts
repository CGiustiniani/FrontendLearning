import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { GreetComponent } from './greet/greet.component';

/* Here you can add additional routes */
const routes: Routes = [
  {path: '', component: OverviewComponent, pathMatch: 'full'},
  {path: 'greet/:name', component: GreetComponent},
  {path: 'overview' , component: OverviewComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        OverviewComponent,
        GreetComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }