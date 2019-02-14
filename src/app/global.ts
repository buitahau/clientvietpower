import {Injectable} from '@angular/core';
// const fs = require('fs');
import {environment} from 'src/environments/environment';
import {FileService} from './file.service';

@Injectable({
  providedIn: 'root'
})

export class GlobalVariable {
  BASE_API_URL: undefined;

  constructor(private fileService: FileService) {
  }

  getBaseApiUrl() {
    const test = true;
    let res = '';
    if (test) {
      res = environment.settings.serverendpoint;
    } else {
      if (this.BASE_API_URL) {
        res = this.BASE_API_URL;
      }
    }
    return res;
  }

  getEndpoint() {
    const me = this;
    this.fileService.getFiles().then(data => {
      const d = JSON.parse(data.toString());
      if (d.endPoint) {
        me.BASE_API_URL = d.endPoint;
      }
    });
  }
}
