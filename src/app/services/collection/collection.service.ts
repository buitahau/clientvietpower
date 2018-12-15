import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpService} from '../../shared/http/services/http.service';
import {CollectionModel} from '../../models/collection';

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
            listItems.push(this.convertCollectionToDTO(collection));
          }
        }
        return listItems;
      }), catchError(e => {
        return [];
      })
    );
  }

  private convertCollectionToDTO(object: any): CollectionModel {
    const collection = new CollectionModel();
    collection.collectionId = object.collectionId;
    collection.collectionName = object.collectionName;
    collection.description = object.description;
    collection.createdDate = object.createdDate;
    collection.createBy = object.createBy;
    return collection;
  }
}
