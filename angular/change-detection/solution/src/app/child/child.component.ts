import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() textToShow: string[] = [];

  temperatureDataList: number[] = [];
  averageTemperature: number;
  isQuestionAsked = false;

  constructor(private cd: ChangeDetectorRef) {}

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

  showQuestion() {
    // This method is called from an event handler so change detection is actually implicitly called, as we sad in the tutorial section.
  }

  requestAnswer() {
    (async () => {
      await this.delay(500);
      this.isQuestionAsked = true;
    })();

    timer(0, 2000).subscribe(() => {
      this.averageTemperature = this.getAverageFromData();
      this.cd.markForCheck();
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
