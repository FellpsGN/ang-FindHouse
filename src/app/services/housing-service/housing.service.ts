import { Injectable } from '@angular/core';
import { HousingLocation } from '../../models/housing-location';
import { dataHouse } from '../../models/housing-data';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = dataHouse;
  
  constructor() { }

  getAllHousingLocations() : HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => {
          return housingLocation.id === id;
        })
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName,lastName,email);
  }
}
