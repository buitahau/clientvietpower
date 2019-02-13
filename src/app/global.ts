import {Injectable} from '@angular/core';
// const fs = require('fs');
import {environment} from 'src/environments/environment';

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
      res = environment.settings.serverendpoint;
      this.BASE_API_URL = res;
    }

    return res;
  }
}
