import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import SwiperCore, { Navigation } from 'swiper';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperTestPageComponent } from './ui/pages/swiper-test-page/swiper-test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperTestPageComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,

    AppRoutingModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    SwiperCore.use([Navigation]);
  }
}
