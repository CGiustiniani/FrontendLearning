import { Component, OnInit } from "@angular/core";
import { ServerActivationTimestamp } from "../ServerActivationTimestamp.service";

@Component({
  selector: "app-timestamp",
  templateUrl: "./timestamp.component.html",
  styleUrls: ["./timestamp.component.css"]
})
export class TimestampComponent implements OnInit {
  activationLog = [];

  constructor(private timestampService: ServerActivationTimestamp) {}

  ngOnInit(): void {
    this.activationLog = this.timestampService.activationLog;
  }
}
