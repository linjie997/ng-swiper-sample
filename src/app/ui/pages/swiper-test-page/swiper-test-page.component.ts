import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper-test-page',
  templateUrl: './swiper-test-page.component.html',
  styleUrls: ['./swiper-test-page.component.scss']
})
export class SwiperTestPageComponent implements OnInit {

  items: string[] = Array.from({length: 50}).map((_, i) => `Item #${i}`);

  readonly config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    navigation: true,
    autoplay: {
      delay: 10000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    lazy: {
      loadOnTransitionStart: true,
    },
    centerInsufficientSlides: true,
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
