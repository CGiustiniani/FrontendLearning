import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-generator",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.css"]
})
export class GeneratorComponent implements OnInit {
  serverName = "";

  constructor() {}

  ngOnInit(): void {}

  sendRegistrationRequest() {}
}
