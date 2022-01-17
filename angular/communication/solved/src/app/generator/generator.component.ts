import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-generator",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.css"]
})
export class GeneratorComponent implements OnInit {
  serverName = "";

  @Output() serverRegisterEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendRegistrationRequest() {
    this.serverRegisterEvent.emit(this.serverName);
  }
}
