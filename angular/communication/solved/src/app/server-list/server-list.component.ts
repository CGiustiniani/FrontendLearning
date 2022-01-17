import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server-list",
  templateUrl: "./server-list.component.html",
  styleUrls: ["./server-list.component.css"]
})
export class ServerListComponent implements OnInit {
  serverList = [
    { name: "Server 1", status: "OFF" },
    { name: "Server 2", status: "OFF" },
    { name: "Server 3", status: "OFF" }
  ];

  constructor() {}

  ngOnInit(): void {}

  receiveRegistrationRequest($event) {
    this.serverList.push({ name: $event, status: "OFF" });
  }
}
