import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ConfigModule} from '@spartacus/core';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';
import { ContactModule } from './contact/contact.module';
import { ProductRoutesModule } from './product-routes/product-routes.module';

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
        baseSite: ['electronics-spa'],
        // Exercise 1. Enable the context in the URL. Display base site, language and currency.
        urlParameters: ['baseSite', 'language', 'currency']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.0'
      },
    }),
    ConfigModule.withConfigFactory(defaultCmsContentConfig),
    ContactModule,
    ProductRoutesModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
