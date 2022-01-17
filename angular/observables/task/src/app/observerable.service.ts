import { Observable, of } from "rxjs";
import { Data } from "./data";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class ObserverableService {

  constructor(){}


  getObserverable(): Observable<Data>{
    return of(new Data("1900", "word"));
  }
}