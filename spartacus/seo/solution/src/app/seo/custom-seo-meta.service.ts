import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageMetaService } from '@spartacus/core';
import { SeoMetaService } from '@spartacus/storefront';

@Injectable({
  providedIn: 'root'
})
export class CustomSeoMetaService extends SeoMetaService {

  constructor(ngTitle: Title, ngMeta: Meta, pageMetaService: PageMetaService) {
    super(ngTitle, ngMeta, pageMetaService);
  }

  protected set image(imageUrl: string) {
    if (imageUrl) {
      this.addTag({ name: 'og:image', content: imageUrl });
      this.addTag({ name: 'twitter:image', content: imageUrl });
    }
  }
}