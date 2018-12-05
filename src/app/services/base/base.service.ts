import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {environment} from 'src/environments/environment';
import {BaseModel} from '../../models/base';
import {catchError, map} from 'rxjs/internal/operators';

export let BASE_PA = generateBaseEntity(1,  'PA', 'Pale', null);
export let BASE_EPA = generateBaseEntity(2, 'EPA', 'Extra Pale', null);
export let BASE_DE = generateBaseEntity(3, 'DE', 'Deep', null);
export let BASE_EDE = generateBaseEntity(4, 'EPA', 'Extra Deep', null);

function generateBaseEntity (baseId: number, type: string, name: string, createdBy: number | null) {
  return {
    baseId: baseId, type: type, name: name, createdBy : createdBy
  }
}

@Injectable ({
  providedIn: 'root'
})

export class BaseService {

  constructor(private http: HttpService) { }

   getListBaseFromServer() {
    return this.http.get(environment.settings.serverendpoint + 'base/getAll').pipe(
      map((data: Array<any>) => {
        const listBases = [];
        if (data) {
          for (const base of data) {
            listBases.push(this.convertFromObjectServer2Model(base));
          }
        }
        return listBases;
      }),
      catchError(e => {
        return [];
      })
    );
  }

  convertFromObjectServer2Model(object: any) {
    const baseModel = new BaseModel();
    baseModel.baseCode = object.baseCode;
    baseModel.baseId = object.baseId;
    baseModel.baseName = object.baseName;
    return baseModel;
  }
}
