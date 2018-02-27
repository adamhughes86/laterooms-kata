import { Component, Input } from '@angular/core';
import { IHotelListing } from '../../services/data.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {

  @Input() data: IHotelListing;

  constructor() { }

}
