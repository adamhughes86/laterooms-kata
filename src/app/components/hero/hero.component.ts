import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public heading: string;
  public subheading: string;

  constructor() {
    this.heading = "Hotels";
    this.subheading = "Amazing hotels from around the world"
  }

}
