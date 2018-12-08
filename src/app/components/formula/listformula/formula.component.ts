import {Component, OnInit} from '@angular/core';
import {CollectionDTO, FormulaDTO, ProductDTO, Select2Item} from '../../../models/colorant.model';
import {FormulaService} from '../../../services/formula/formula.service';
import {Sort} from '@angular/material';
import {Router} from '@angular/router';
import {ColorantService} from '../../../services/colorant/colorant.service';
import {CollectionService} from '../../../services/collection/collection.service';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})

export class FormulaComponent implements OnInit {
  listItems = [];
  listOriginal = [];


  colorName: string = '';
  collectionCode: string = '';
  productCode: string = '';

  listColors: Select2Item [] = null;
  listCollections: Select2Item [] = null;
  listProducts: Select2Item [] = null;

  constructor(
    private formulaService: FormulaService,
    private colorantService: ColorantService,
    private collectionService: CollectionService,
    private productService: ProductService,
    private router: Router) {
  }

  filter = {
    colorId: undefined,
    productId: undefined,
    collectionId: undefined
  };

  ngOnInit() {
    this.initMetadata();
  }

  initMetadata() {
    const me = this;

    this.listColors = [];
    this.colorantService.getListItems().subscribe(datas => {
      datas.map(c => {
        me.listColors.push(c);
      });
    });

    this.listProducts = [];
    this.productService.getListItems().subscribe(datas => {
      datas.map(p => {
        me.listProducts.push(p);
      });
    });

    this.listCollections = [];
    this.collectionService.getListItems().subscribe(datas => {
      datas.map(c => {
        me.listCollections.push(c);
      });
    });

    // lay list formula product base
    this.listItems = [];
    this.listOriginal = [];
    this.formulaService.getListItems().subscribe(datas => {
      datas.map(fpb => {
        this.listItems.push(fpb);
        this.listOriginal.push(fpb);
      });
    });
  }

  filterFormula(sort: Sort | null) {

    if (this.colorName == null) {
      this.colorName = '';
    }

    if (this.collectionCode == null) {
      this.collectionCode = '';
    }

    if (this.productCode == null) {
      this.productCode = '';
    }

    let result = this.formulaService.filterAndSort(this.colorName, this.collectionCode, this.productCode, sort);



    let listProduct: ProductDTO [] = result.listProducts;
    let listCollection: CollectionDTO [] = result.listCollections;
    let mapProduct = {};
    let mapCollection = {};



    // if(listProduct.length === 1){
    //   this.listProducts = [];
    //   this.productCode = listProduct[0].productCode;
    //
    // } else {
    this.listProducts = [];
    this.listProducts.push({id: '', text: 'Choose Product'});

    for (let _product of listProduct) {
      if (mapProduct[_product.productCode] == null) {
        mapProduct[_product.productCode] = _product;
        // this.listProducts.push({id: _product.productCode, text: _product.productName});
      }
    }
    // }

    this.listCollections = [];
    this.listCollections.push({id: '', text: 'Choose Collection'});

    for (let _collection of listCollection) {
      if (mapCollection[_collection.collectionId] == null) {
        mapCollection[_collection.collectionId] = _collection;
        // this.listCollections.push({id: _collection.collectionCode, text: _collection.collectionName});
      }
    }

    this.listItems = result.listFormula;
  }

  sortData(sort: Sort) {
    this.filterFormula(sort);
  }

  changedColor(e: any): void {
    this.colorName = e.value;
    this.filterFormula(null);
  }

  changedProduct(e: any): void {
    this.productCode = e.value;
    this.filterFormula(null);
  }

  changedCollection(e: any): void {
    this.collectionCode = e.value;
    this.filterFormula(null);
  }

  viewFormula(id) {
    this.router.navigate([`../dashboard/view-formula/${id}`]);
  }

  onFilterChange() {
    this.refresh();
  }

  refresh() {
    debugger;
    // TODO: filter in here
  }
}
