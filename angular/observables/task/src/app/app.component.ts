import { Component } from '@angular/core';
import { ObserverableService } from './observerable.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Observerables';
  word: string;
  id: number;

  constructor(private service: ObserverableService){
    
  }

  workWithObserverable(){
    //get observerable from observerable.service.ts
  }
}
