import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {environment} from 'src/environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import ConvertModelUtils from '../../utils/convert-models-utils';

@Injectable({providedIn: 'root'})

export class BaseService {

  constructor(private http: HttpService) {
  }

  getListBaseFromServer() {
    return this.http.get(environment.settings.serverendpoint + 'base/getAll').pipe(
      map((data: Array<any>) => {
        const listBases = [];
        if (data) {
          for (const base of data) {
            listBases.push(ConvertModelUtils.convertBaseObject(base));
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
