import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwiperTestPageComponent } from './ui/pages/swiper-test-page/swiper-test-page.component';

export const routes: Routes = [
  {
    path: 'swiper',
    component: SwiperTestPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
