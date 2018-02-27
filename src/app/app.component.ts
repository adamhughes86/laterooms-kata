import { Component } from '@angular/core';
import { DataService, IHotelListing } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public hotels: IHotelListing[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.hotels = this.dataService.fetchHotels();
  }

  // Filter by argument
  filter(query: string) {
    this.hotels = this.hotels.filter((hotel) =>
      hotel.Facilities.indexOf(query) > -1
    );
  }

  // Reset filter and display all hotels
  resetFilter() {
    this.hotels = this.dataService.fetchHotels();
  }

  // Hotels in Ascending Order
  orderHotelsAsc() {
    this.hotels = this.hotels.sort((a: IHotelListing, b: IHotelListing) => {
      if (a.StarRating < b.StarRating) {
        return -1;
      } else if (a.StarRating > b.StarRating) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // Hotels in Descending Order
  orderHotelsDesc() {
    this.hotels = this.hotels.sort((a: IHotelListing, b: IHotelListing) => {
      if (a.StarRating > b.StarRating) {
        return -1;
      } else if (a.StarRating < b.StarRating) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
