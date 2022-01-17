import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent} from './app.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TruncatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }