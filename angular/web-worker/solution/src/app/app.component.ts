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

  constructor(private workerService: WebworkerService){
  }

  public longLoop() {
    this.longProcessOutput = "";
    var that = this;

    this.workerService.run(CALCULATION_SCRIPT).then(
      (results: any) => {
        if (results instanceof Array) {
          results.forEach(function(result){
            that.longProcessOutput += `${result}` + "\n";
          })      
        }
      }
    ).catch(console.error);
  }

}