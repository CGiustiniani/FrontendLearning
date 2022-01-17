import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({ selector: "app", templateUrl: "app.component.html", styleUrls: ['./app.component.css'] })
export class AppComponent {
  selectedLanguage: string = "EN";

  /* Add the TranslateService via constructor injection */
  constructor() {}

  /* Update this function to set the selected target language */
  onUpdate() {
    console.log('Language currently selected: ', this.selectedLanguage);
  }
}
