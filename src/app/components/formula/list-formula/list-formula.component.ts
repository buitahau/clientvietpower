import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {FormulaProductBaseModel} from '../../../models/formula_product_base';
import {CollectionModel} from '../../../models/collection';
import {FormulaModel} from '../../../models/formula';
import {StoreService} from '../../../services/store/store.service';
import {CollectionService} from '../../../services/collection/collection.service';
import {FormulaService} from '../../../services/formula/formula.service';
import {Router} from '@angular/router';
import {ProductService} from '../../../services/product/product.service';
import {FormulaCustomerModel} from '../../../models/formulacustomer';
import {CustomerService} from '../../../services/customer/customer.service';
import {CustomerModel} from '../../../models/customer';
import {ProductModel} from '../../../models/product';
import {Sort} from '@angular/material';
import {PagenationModel} from '../../../models/pagination.model';
import {ProductBaseModel} from '../../../models/product_base';

@Component({
  selector: 'app-list-formula',
  templateUrl: './list-formula.component.html',
  styleUrls: ['./list-formula.component.scss']
})

export class ListFormulaComponent implements OnInit {
  @Output() selectedFormula = new EventEmitter<FormulaProductBaseModel>();

  listItems: FormulaProductBaseModel[] = [];
  sortedData: FormulaProductBaseModel[] = [];
  currentSort: Sort = null;
  listOriginal = [];

  listFormulas: FormulaModel[] = [];
  listCollections: CollectionModel[] = [];
  listProducts: ProductModel[] = [];
  listProductBase: ProductBaseModel[];
  listCustomer: CustomerModel[] = [];
  listFormulaCustomer: FormulaCustomerModel[] = [];

  pagenationMode: PagenationModel = new PagenationModel([], 0, 0, 15);

  filter: {
    formulaId: number,
    productId: number,
    collectionId: number,
    customerId: number
  };

  constructor(
    private storeService: StoreService,
    private formulaService: FormulaService,
    private collectionService: CollectionService,
    private productService: ProductService,
    private customerService: CustomerService,
    private router: Router) {
  }

  ngOnInit() {
    this.listItems = [];
    this.listOriginal = [];
    this.sortedData = [];

    this.filter = {
      formulaId: undefined,
      productId: undefined,
      collectionId: undefined,
      customerId: undefined
    };

    if (this.storeService.getMachineData() != null && this.storeService.getMachineData().machineId > 0) {
      this.initMetadata();
    }
  }

  initMetadata() {
    // this.formulaService.postData();
    // this.formulaService.postData1();
    const me = this;

    this.listFormulas = [];
    this.formulaService.getALl().subscribe(datas => {
      this.listFormulas = datas;
    });

    this.listProducts = [];
    this.productService.getListItems().subscribe(datas => {
      this.listProducts = datas;
    });

    this.listCollections = [];
    this.collectionService.getListItems().subscribe(datas => {
      me.listCollections = datas;
    });

    this.listProductBase = [];
    this.productService.getListProductBase().subscribe(datas => {
      me.listProductBase = datas;
    });

    // get list formula product base
    this.listItems = [];
    this.listOriginal = [];

    this.formulaService.getAllFormulaProductBase().subscribe(datas => {
      datas.map(fpb => {
        me.listItems.push(fpb);
        me.listOriginal.push(fpb);
      });

      this.updateCustomerForFormula();
      this.updatePagenationMode();
    });


    this.listCustomer = [];
    this.customerService.findAll().subscribe(datas => {
      this.listCustomer = datas;
    });

    this.listFormulaCustomer = [];
    this.formulaService.findAllByCustomer().subscribe(_datas => {
      this.listFormulaCustomer = _datas;
      this.updateCustomerForFormula();
    });
  }

  updateCustomerForFormula(): void {
    if (this.listFormulaCustomer != null && this.listFormulaCustomer.length > 0 && this.listItems != null && this.listItems.length > 0) {
      for (const formulaCustomer of this.listFormulaCustomer) {
        const listFormulaBase = this.listItems.filter(item => {
          return item.formula.formulaId === formulaCustomer.formula.formulaId;
        });

        if (listFormulaBase != null && listFormulaBase.length > 0) {
          for (const formulaBase of listFormulaBase) {
            if (formulaBase.formula != null && (formulaBase.formula.listCustomer == null || formulaBase.formula.listCustomer === undefined)) {
              formulaBase.formula.listCustomer = [];
            }
            formulaBase.formula.listCustomer.push(formulaCustomer.customer);
          }
        }
      }
    }
  }

  sortData = function (sort: Sort) {
    this.currentSort = sort;
    this.refresh();
  };

  updatePagenationMode = function () {
    const listItem = this.listItems;
    const currentPage = this.pagenationMode.pageIndex;

    const _listItem = [];

    for (let i = currentPage * this.pagenationMode.maxPageItem; i < listItem.length; i++) {
      if (i < currentPage * this.pagenationMode.maxPageItem + this.pagenationMode.maxPageItem) {
        _listItem.push(listItem[i]);
      } else {
        break;
      }
    }

    this.pagenationMode.listItems = _listItem;
    this.pagenationMode.totalItem = listItem.length;
  };

  viewFormula(selectItem: FormulaProductBaseModel) {
    this.selectedFormula.emit(selectItem);
    // this.router.navigate([`../dashboard/view-formula/${formulaProductBaseId}`]);
  }

  onFilterChange(event) {
    this.refresh();
  }

  reset() {

  }

  refresh() {
    let resFilter = this.listOriginal;

    if (this.filter.formulaId) {
      resFilter = resFilter.filter(fpb => {
        return fpb.formula.formulaId.toString() === this.filter.formulaId.toString();
      });
    }

    if (this.filter.collectionId) {
      resFilter = resFilter.filter(fpb => {
        return fpb.formula.collection.collectionId.toString() === this.filter.collectionId.toString();
      });
    }

    if (this.filter.productId) {
      resFilter = resFilter.filter(fpb => {
        return fpb.productBase.product.productId.toString() === this.filter.productId.toString();
      });
    }

    if (this.filter.customerId) {
      resFilter = resFilter.filter(fpb => {
        let isExis = false;
        if (fpb.formula.listCustomer != null && fpb.formula.listCustomer.length > 0) {
          const index = fpb.formula.listCustomer.findIndex(customer => {
            return customer.customerId.toString() === this.filter.customerId.toString();
          });
          if (index != null && index > -1) {
            isExis = true;
          }
        }
        return isExis;
      });
    }

    this.listItems = resFilter;

    if (this.currentSort == null || !this.currentSort.active || this.currentSort.direction === '') {
      this.listItems = resFilter;
    } else {
      this.listItems = resFilter.sort((a, b) => {
        const isAsc = this.currentSort.direction === 'asc';
        switch (this.currentSort.active) {
          case 'formulaCode':
            return compare(a.formula.formulaCode, b.formula.formulaCode, isAsc);
          case 'formulaName':
            return compare(a.formula.formulaName, b.formula.formulaName, isAsc);
          case 'approximateColor':
            return compare(a.formula.approximateColor, b.formula.approximateColor, isAsc);
          case 'collection':
            return compare(a.formula.collection.collectionName, b.formula.collection.collectionName, isAsc);
          case 'product':
            return compare(a.productBase.product.productName, b.productBase.product.productName, isAsc);
          case 'createdDate':
            return compare(a.formula.createdDate, b.formula.createdDate, isAsc);
          case 'createdBy':
            return compare(a.formula.machine != null ? 1 : 0, b.formula.machine != null ? 1 : 0, isAsc);
          default:
            return 0;
        }
      });
    }

    this.pagenationMode.pageIndex = 0;
    this.updatePagenationMode();

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  goToPage(pageIndex: number) {
    this.pagenationMode.pageIndex = pageIndex;
    this.updatePagenationMode();
  }

  addNewFormula() {
    this.router.navigate([`../dashboard/formula/add`]);
  }

  editTheFormula(formulaId) {
    this.router.navigate([`../dashboard/formula/edit/${formulaId}`]);
  }
}
