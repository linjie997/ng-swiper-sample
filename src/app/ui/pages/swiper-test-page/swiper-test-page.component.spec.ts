import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperTestPageComponent } from './swiper-test-page.component';

describe('SwiperTestPageComponent', () => {
  let component: SwiperTestPageComponent;
  let fixture: ComponentFixture<SwiperTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperTestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
