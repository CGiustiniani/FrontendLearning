import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServerListComponent } from "./server-list/server-list.component";
import { GeneratorComponent } from "./generator/generator.component";
import { TimestampComponent } from "./timestamp/timestamp.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    GeneratorComponent,
    TimestampComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
