import { Injectable } from '@angular/core';

interface IHotelListing {
  Name: string;
  StarRating: number;
  Facilities: Array<string>;
}

@Injectable()
export class DataService {

  public hotelData: IHotelListing[] = [
    {
      "Name": "hotelone",
      "StarRating": 5,
      "Facilities": ["car park", "pool"]
    },
    {
      "Name": "hoteltwo",
      "StarRating": 3,
      "Facilities": ["car park", "gym"]
    },
    {
      "Name": "hotelthree",
      "StarRating": 3,
      "Facilities": []
    }
  ]

  constructor() { }

  public fetchHotels() {
    return (this.hotelData);
  }
}
