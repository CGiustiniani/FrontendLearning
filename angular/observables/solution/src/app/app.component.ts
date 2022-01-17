import { Component } from '@angular/core';
import { ObserverableService } from './observerable.service';
import { UpperCasePipe } from '@angular/common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Observerables';
  word: string;
  id: string;

  constructor(private service: ObserverableService){
    
  }

  workWithObserverable(){
    this.service.getObserverable().pipe(
      tap(data => console.log(JSON.stringify(data)))
    ).subscribe({
      next: data => {
        this.word = data.word,
        this.id = data.id
      }
    });
  }
}
