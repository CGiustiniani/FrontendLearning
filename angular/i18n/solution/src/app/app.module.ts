import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { Observable, of } from "rxjs";

/**
 * This section is >>StackBlitz only<< as loading JSON files does not work at this time (requests return HTML of the default page instead of JSON target files)
 * Please have a look here for solution demos: https://github.com/TBernwinkler/solved-ecx-angular-i18n-multi-language
 * Do NOT use this loader in your own app / project
 */
import en from "../assets/i18n/en.json";
import de from "../assets/i18n/de.json";
import hr from "../assets/i18n/hr.json";

class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    console.log(lang);
    if (lang === "de") {
      return of(de);
    } else if (lang === "hr") {
      return of(hr);
    } else {
      return of(en);
    }
  }
}

export function createTranslateLoader() {
  return new CustomLoader();
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: []
      }
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
