import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {environment} from 'src/environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {GlobalVariable} from '../../global';

@Injectable({providedIn: 'root'})

export class BaseService {

  constructor(private http: HttpService, private globalVariable: GlobalVariable) {
  }

  getListBaseFromServer() {
    return this.http.get(this.globalVariable.getBaseApiUrl() + 'base/getAll').pipe(
      map((data: Array<any>) => {
        const listBases = [];
        if (data) {
          for (const base of data) {
            listBases.push(ConvertModelUtils.convertToBaseModel(base));
          }
        }
        return listBases;
      }),
      catchError(e => {
        return [];
      })
    );
  }

}
