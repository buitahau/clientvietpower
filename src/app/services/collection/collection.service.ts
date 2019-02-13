import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpService} from '../../shared/http/services/http.service';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {CollectionModel} from '../../models/collection';
import {MachineModel, UserModel} from '../../models/user.model';
import {StoreService} from '../store/store.service';
import {GlobalVariable} from '../../global';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  constructor(private http: HttpService, private storeService: StoreService, private globalVariable: GlobalVariable) {
  }

  getListItems() {
    return this.http.get(this.globalVariable.getBaseApiUrl() + 'collection/getAll').pipe(
      map((data: Array<any>) => {
        const listItems = [];
        if (data) {
          for (const collection of data) {
            listItems.push(ConvertModelUtils.convertCollectionModel(collection));
          }
        }
        return listItems;
      }), catchError(e => {
        return [];
      })
    );
  }

  findById(collectionId) {
    return this.http.get(this.globalVariable.getBaseApiUrl() + 'collection/findById/' + collectionId).pipe(
      map((data: any) => {
        return ConvertModelUtils.convertCollectionModel(data);
      })
    );
  }

  updateOrSavingCollection(collection: CollectionModel) {
    const machine = this.storeService.getMachineData();
    const dt = {
      collectionId: collection.collectionId,
      collectionName: collection.collectionName,
      description: collection.description,
      machine: {machineId: machine.machineId}
    };

    return this.http.post(this.globalVariable.getBaseApiUrl() + 'collection/save', dt).pipe(
      map((data: any) => {
        return ConvertModelUtils.convertToMachineModel(data);
      })
    );
  }

  deleteCollection(collectionId: number) {
    return this.http.get(this.globalVariable.getBaseApiUrl() + 'collection/delete/' + collectionId).pipe(
      map((data: any) => {
        return ConvertModelUtils.convertToResponseMessageModel(data);
      })
    );
  }
}
