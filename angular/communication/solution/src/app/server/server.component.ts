import { Component, OnInit, Input } from "@angular/core";
import { ServerActivationTimestamp } from "../ServerActivationTimestamp.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  @Input()
  server = { name: "default", status: "OFF" };

  constructor(private timestampService: ServerActivationTimestamp) {}

  ngOnInit(): void {}

  turnOn(serverName) {
    this.server.status = "ON";
    this.timestampService.publishServerActivation(this.server);
  }
  turnOff(serverName) {
    this.server.status = "OFF";
    this.timestampService.publishServerDeactivation(this.server);
  }
}
