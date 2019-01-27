import {Injectable} from '@angular/core';
import {Sort} from '@angular/material';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpService} from '../../shared/http/services/http.service';
import {ProductModel} from '../../models/product';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {BaseModel} from '../../models/base';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  listItems: ProductModel[] = [];
  sortedData: ProductModel[] = null;

  constructor(private http: HttpService) {
  }

  getListItems() {
    return this.http.get(environment.settings.serverendpoint + 'product/getAll').pipe(
      map((data: Array<any>) => {
        const listItems = [];
        if (data) {
          for (const item of data) {
            listItems.push(ConvertModelUtils.convertToProductModel(item));
          }
        }
        return listItems;
      }),
      catchError(e => {
        return [];
      })
    );
  }

  viewProductDetail(productId: number): any {
    return this.http.get(environment.settings.serverendpoint + 'product/view-detail/' + productId);
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productCode': return compare(a.productCode, b.productCode, isAsc);
        case 'productName': return compare(a.productName, b.productName, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | number, b: string | number, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  getListProductBase() {
    return this.http.get(environment.settings.serverendpoint + 'product-base/findAll').pipe(
      map((data: Array<any>) => {
        const listItems = [];
        if (data) {
          for (const item of data) {
            listItems.push(ConvertModelUtils.convertToProductBaseModel(item));
          }
        }
        return listItems;
      }),
      catchError(e => {
        return [];
      })
    );
  }

  getListProductBaseFromProduct(productId: number) {
    return this.http.get(environment.settings.serverendpoint + 'product-base/findByProduct/' + productId).pipe(
      map((data: Array<any>) => {
        const listItems = [];
        if (data) {
          for (const item of data) {
            listItems.push(ConvertModelUtils.convertToProductBaseModel(item));
          }
        }
        return listItems;
      }),
      catchError(e => {
        return [];
      })
    );
  }
}
