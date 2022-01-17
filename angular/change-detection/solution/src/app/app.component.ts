import { Component } from "@angular/core";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  textToShow: string[] = [];

  createQuestion(input) {
    this.textToShow.push(input.value);
    console.log(this.textToShow);
  }
}
