import { Component } from "@angular/core";

import { WebworkerService } from './webworker.service';
import { CALCULATION_SCRIPT } from './calculation.script';

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "NgWebWorker";
  longProcessOutput: string = "Long\nprocess\noutput\nwill\nappear\nhere\n";
  fibCalcStartVal: number;
  worker: any;

  constructor(){
  }

  // public longLoop() {
  //   this.longProcessOutput = "";
  //   var that = this;

  //   this.workerService.run(CALCULATION_SCRIPT).then(
  //     (results: any) => {
  //       if (results instanceof Array) {
  //         results.forEach(function(result){
  //           that.longProcessOutput += `${result}` + "\n";
  //         })      
  //       }
  //     }
  //   ).catch(console.error);
  // }

  public longLoop() {
    this.longProcessOutput = "";
    var results = [1];
    for (let x = 1; x <= 1000000000; x++) {
      let y = x / 3.2;
      if (x % 20000000 === 0) {
        this.longProcessOutput += `${x}` + "\n";
      }
    }
  }
  

}