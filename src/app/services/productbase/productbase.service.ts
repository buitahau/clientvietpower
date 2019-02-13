import {Injectable} from '@angular/core';
import {GlobalVariable} from '../../global';
import {HttpService} from '../../shared/http/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductBaseService {
  constructor(private http: HttpService, private globalVariable: GlobalVariable) {
  }


}
