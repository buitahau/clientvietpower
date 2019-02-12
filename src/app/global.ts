import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalVariable {
  BASE_API_URL: undefined;

  constructor() {
  }

  getBaseApiUrl() {
    let res;
    if (this.BASE_API_URL) {
      res = this.BASE_API_URL;
    } else {
      res = 'http://localhost:3000';
      this.BASE_API_URL = res;
    }

    return res;
  }
}
