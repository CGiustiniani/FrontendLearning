import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  selectedLanguage = "en";

  constructor(private translate: TranslateService) {}

  onUpdate(): void {
    this.translate.use(this.selectedLanguage);
  }
}
