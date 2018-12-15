import {Injectable} from '@angular/core';

import {HttpService} from '../../shared/http/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductBaseService {
  constructor(private http: HttpService) {
  }


}
