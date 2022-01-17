import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ServerActivationTimestamp {
  activationLog: {
    serverName: string;
    serverStatus: string;
    timestamp: string;
  }[] = [];

  publishServerActivation(instance) {
    this.activationLog.push({
      serverName: instance.name,
      serverStatus: instance.status,
      timestamp: new Date().toString()
    });
  }

  publishServerDeactivation(instance) {
    this.activationLog.push({
      serverName: instance.name,
      serverStatus: instance.status,
      timestamp: new Date().toString()
    });
  }
}
