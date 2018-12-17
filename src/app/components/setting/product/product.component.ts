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
    return this.productService.sortData(sort);
  }

  fletchData() {
    this.productService.getListItems().subscribe((data: any) => {
      this.sortedData = data;
    });
  }

  showProductDetail(productId: number) {
    this.currentProductViewer = productId;
  }
}
