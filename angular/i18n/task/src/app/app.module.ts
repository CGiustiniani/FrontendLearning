import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

/* Import all JSON files here */
/* e.g. import en from "../..." */


/* Add a function to provide a CustomLoader here */


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        /* Add the TranslateModule here 
            - I suggest to use the simple appraoch 'forRoot'
            - Add the config inside
         */
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }