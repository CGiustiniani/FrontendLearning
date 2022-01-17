import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ConfigModule, I18nModule, I18nConfig} from '@spartacus/core';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';

@NgModule({
  imports:      [ 
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://api.c39j2-walkersde1-d3-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/', // TODO change to /occ/v2/ when backend updated to 2005
          legacy: false
        }
      },
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        // Exercise 1. Configure the application to use lazy loading for translations (Note: json files are in `src/assets/i18n-assets` folder)
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'

        // Exercise 2. Add German translations for product, and try to adapt the "Add to Cart" translation in German
      },
      features: {
        level: '2.0'
      },
    }),
    ConfigModule.withConfigFactory(defaultCmsContentConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
