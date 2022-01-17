import { Component, OnInit } from '@angular/core';
import { IDataItem } from './dataItem';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    jsonOutput : string; 
    errorMsg: string;
    
    private serviceUrl = 'https://api.npms.io/v2/search?q=scope:angular';
    private serviceUrlForErrorResponse = 'https://api.npms.io/v2/invalid-url';

    constructor(private http : HttpClient) {

     }

    ngOnInit() {
      
        this.http.get<IDataItem>(this.serviceUrl).subscribe({
          next: data => this.jsonOutput = JSON.stringify(data),
          error: err => this.errorMsg = err
        });

        this.http.get<IDataItem>(this.serviceUrlForErrorResponse).pipe(
          catchError(this.errorHandling)
        ).subscribe({
          next: data => this.jsonOutput = JSON.stringify(data),
          error: err => this.errorMsg = err
        })
    }

    errorHandling( err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        
        return throwError(errorMessage);
    }
}
