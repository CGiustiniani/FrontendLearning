import { Component, OnInit } from '@angular/core';
import { IDataItem } from './dataItem';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    jsonOutput : string; 
    errorMsg: string;
    
    private serviceUrl = 'https://api.npms.io/v2/search?q=scope:angular';
    private serviceUrlForErrorResponse = 'https://api.npms.io/v2/search?q=scope:angular';

    constructor(private http : HttpClient) {

     }

    ngOnInit() {
        // add typed data call here 

        //add call to invalid url with error handling 
    }

    errorHandling( err: HttpErrorResponse){

    }
}
