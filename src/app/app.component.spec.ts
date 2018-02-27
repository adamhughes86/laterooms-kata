import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { DataService } from './services/data.service';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { GymIconComponent } from './icons/gym-icon/gym-icon.component';
import { PoolIconComponent } from './icons/pool-icon/pool-icon.component';
import { ParkingIconComponent } from './icons/parking-icon/parking-icon.component';
import { ArrowDownIconComponent } from './icons/arrow-down-icon/arrow-down-icon.component';
import { ArrowUpIconComponent } from './icons/arrow-up-icon/arrow-up-icon.component';
import { VisibleIconComponent } from './icons/visible-icon/visible-icon.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroComponent,
        HotelCardComponent,
        StarRatingComponent,
        GymIconComponent,
        PoolIconComponent,
        ParkingIconComponent,
        ArrowDownIconComponent,
        ArrowUpIconComponent,
        VisibleIconComponent
      ],
      providers: [
        DataService
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
