import {Injectable} from '@angular/core';
import {Sort} from '@angular/material';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import {ColorantModel} from '../../models/colorant';
import {HttpService} from '../../shared/http/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ColourantService {
  constructor(private http: HttpService) {
  }

  search(code: string, name: string) {
    return this.getListItems();
    // return this.listItems.filter(filterColor({code: code, name: name}));
  }

  sortData(sort: Sort) {
    return this.getListItems();

  }

  getListItems() {
    return this.http.get(environment.settings.serverendpoint + 'colourant/getAll').pipe(
      map((data: Array<any>) => {
        const listColourant = [];
        if (data) {
          for (const colorant of data) {
            listColourant.push(this.convertColourantToDTO(colorant));
          }
        }
        return listColourant;
      }), catchError(e => {
        return [];
      })
    );
  }

  private convertColourantToDTO(object: any) {
    const colourantModel = new ColorantModel();
    colourantModel.colourantId = object.colourantId;
    colourantModel.colourantCode = object.colourantCode;
    colourantModel.colourantName = object.colourantName;
    colourantModel.density = object.density;
    colourantModel.pricePerUnit = object.pricePerUnit;
    colourantModel.surcharge = object.surcharge;
    colourantModel.rbgHex = object.rbgHex;
    colourantModel.kind = object.kind;
    return colourantModel;
  }
}
