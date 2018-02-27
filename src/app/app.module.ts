import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HeroComponent } from './components/hero/hero.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { GymIconComponent } from './icons/gym-icon/gym-icon.component';
import { PoolIconComponent } from './icons/pool-icon/pool-icon.component';
import { ParkingIconComponent } from './icons/parking-icon/parking-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HotelCardComponent,
    StarRatingComponent,
    GymIconComponent,
    PoolIconComponent,
    ParkingIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
