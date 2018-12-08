import {Injectable} from '@angular/core';
import {ProductDTO} from '../../models/colorant.model';
import {Sort} from '@angular/material';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpService} from '../../shared/http/services/http.service';
import {ProductModel} from '../../models/product';

function generateProductEntity(productId: number,
                               productCode: string,
                               productName: string,
                               createdDate: string,
                               createdBy: number | null): ProductDTO {
  return {
    productId: productId,
    productCode: productCode,
    productName: productName,
    createdDate: createdDate,
    createdBy: createdBy,
  };
}

export const A = generateProductEntity(1, 'A', 'Egg Shell', null, null);
export const B = generateProductEntity(2, 'B', 'Primer', null, null);
export const C3 = generateProductEntity(3, 'C3', 'Floor Paint', null, null);
export const D = generateProductEntity(4, 'D', 'Nautic Paint', null, null);
export const E = generateProductEntity(5, 'E', 'Gloss', null, null);
export const s = generateProductEntity(6, 's', 'Gloss', null, null);


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  listItems: ProductDTO[] = [A, B, C3, D, E, s];
  sortedData: ProductDTO[] = null;

  constructor(private http: HttpService) {
  }

  getListItems() {
    return this.http.get(environment.settings.serverendpoint + 'product/getAll').pipe(
      map((data: Array<any>) => {
        const listItems = [];
        if (data) {
          for (const item of data) {
            listItems.push(this.convertToProductModel(item));
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

  private convertToProductModel (object: any): ProductModel {
    console.log(object);
    const item = new ProductModel();
    item.productId = object.productId;
    item.productCode = object.productCode;
    item.productName = object.productName;
    item.createdDate = object.createdDate;
    item.createBy = object.createBy;
    return item;
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productCode':
          return compare(a.productCode, b.productCode, isAsc);
        case 'productName':
          return compare(a.productName, b.productName, isAsc);
        default:
          return 0;
      }
    });

    function compare(a: string | number, b: string | number, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

}
