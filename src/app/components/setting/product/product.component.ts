import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {ProductService} from '../../../services/product/product.service';
import {ProductModel} from '../../../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  productCode: string = null;
  productName: string = null;

  listItems: ProductModel[] = null;
  sortedData: ProductModel[] = null;
  currentProductViewer: number = null;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.fletchData();
  }

  filter() {
    // const filterProduct = function (filter) {
    //   return function (item: ProductDTO): boolean {
    //     return (filter.productCode === null || filter.productCode === '' || item.productCode === filter.productCode)
    //       && (filter.productName === null || filter.productName === '' || item.productName === filter.productName);
    //   };
    // };
    //
    // this.sortedData = this.listItems.filter(filterProduct({code: this.productCode, name: this.productName}));
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productCode': return compare(a.productCode, b.productCode, isAsc);
        case 'productName': return compare(a.productName, b.productName, isAsc);
        case 'createdDate': return compare(a.createdDate, b.createdDate, isAsc);
        case 'createBy': return compare(a.createBy == null ? 0 : 1, b.createBy  == null ? 0 : 1, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | number, b: string | number, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  fletchData() {
    this.productService.getListItems().subscribe((data: any) => {
      this.listItems = data;
      this.sortedData = this.listItems;
    });
  }

  showProductDetail(productId: number) {
    this.currentProductViewer = productId;
  }
}
