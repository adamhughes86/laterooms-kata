import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HeroComponent } from './components/hero/hero.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HotelCardComponent
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
