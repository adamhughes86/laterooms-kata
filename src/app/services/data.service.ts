import { Injectable } from '@angular/core';

export interface IHotelListing {
  Name: string;
  StarRating: number;
  Facilities: Array<string>;
}

@Injectable()
export class DataService {

  public hotelData: IHotelListing[] = [
    {
      "Name": "Hotel one",
      "StarRating": 5,
      "Facilities": ["car park", "pool"]
    },
    {
      "Name": "Hotel two",
      "StarRating": 3,
      "Facilities": ["car park", "gym"]
    },
    {
      "Name": "Hotel three",
      "StarRating": 3,
      "Facilities": []
    },
    {
      "Name": "Hotel four",
      "StarRating": 5,
      "Facilities": ["car park", "pool"]
    },
    {
      "Name": "Hotel five",
      "StarRating": 3,
      "Facilities": ["car park", "gym"]
    },
    {
      "Name": "Hotel six",
      "StarRating": 3,
      "Facilities": []
    }
  ]

  constructor() { }

  public fetchHotels() {
    return (this.hotelData);
  }
}
