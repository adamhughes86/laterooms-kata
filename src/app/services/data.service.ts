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
      "Facilities": ["car park", "pool", "gym"]
    },
    {
      "Name": "Hotel two",
      "StarRating": 2,
      "Facilities": ["car park", "gym"]
    },
    {
      "Name": "Hotel three",
      "StarRating": 3,
      "Facilities": []
    },
    {
      "Name": "Hotel four",
      "StarRating": 4,
      "Facilities": ["car park", "pool"]
    },
    {
      "Name": "Hotel five",
      "StarRating": 3,
      "Facilities": ["pool", "gym"]
    },
    {
      "Name": "Hotel six",
      "StarRating": 1,
      "Facilities": []
    }
  ]

  constructor() { }

  public fetchHotels() {
    return (this.hotelData);
  }
}
