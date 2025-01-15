import { Injectable } from '@angular/core';
import { AdComponentComponent } from './ad-component/ad-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentServiceTsService {
  constructor() {}
  getAds() {
    return [
      {
        component: AdComponentComponent,
        inputs: {
          addName: 'Arya Ads',
          addDate: new Date(),
        },
      },
      {
        component: ProfileComponentComponent,
        inputs: {
          name: 'Putu Gde Arya',
        },
      },
    ];
  }
}
