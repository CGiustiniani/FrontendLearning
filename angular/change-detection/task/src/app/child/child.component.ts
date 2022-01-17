import { Component, Input } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent {
  @Input() textToShow: string[] = [];

  temperatureDataList: number[] = [];
  averageTemperature: number;
  isQuestionAsked = false;

  constructor() {}

  getAverageFromData() {
    this.temperatureDataList.push(this.getTemperatureFromSensor());
    return (
      Math.round(this.calculateAverageFromData(this.temperatureDataList) * 10) /
      10
    );
  }

  getTemperatureFromSensor() {
    return Math.floor(Math.random() * 40) + 1;
  }

  calculateAverageFromData(temperatureDataList) {
    let sum = 0;
    let listLength = temperatureDataList.length;

    for (let i = 0; i < listLength; i++) {
      sum += temperatureDataList[i];
    }

    return sum / listLength;
  }

  requestAnswer() {
    (async () => {
      await this.delay(500);
      this.isQuestionAsked = true;
    })();

    timer(0, 2000).subscribe(() => {
      this.averageTemperature = this.getAverageFromData();
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
