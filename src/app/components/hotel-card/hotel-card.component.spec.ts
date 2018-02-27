import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardComponent } from './hotel-card.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { GymIconComponent } from '../../icons/gym-icon/gym-icon.component';
import { PoolIconComponent } from '../../icons/pool-icon/pool-icon.component';
import { ParkingIconComponent } from '../../icons/parking-icon/parking-icon.component';

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelCardComponent,
        StarRatingComponent,
        GymIconComponent,
        PoolIconComponent,
        ParkingIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
