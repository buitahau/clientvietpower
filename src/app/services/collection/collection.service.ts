import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpService} from '../../shared/http/services/http.service';
import ConvertModelUtils from '../../utils/convert-models-utils';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  constructor(private http: HttpService) {
  }

  getListItems() {
    return this.http.get(environment.settings.serverendpoint + 'collection/getAll').pipe(
      map((data: Array<any>) => {
        const listItems = [];
        if (data) {
          for (const collection of data) {
            listItems.push(ConvertModelUtils.convertToColourantObject(collection));
          }
        }
        return listItems;
      }), catchError(e => {
        return [];
      })
    );
  }
}
