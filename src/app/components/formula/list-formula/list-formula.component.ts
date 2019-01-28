import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
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
import {BaseModel} from '../../../models/base';
import {FileService} from '../../../file.service';

@Component({
  selector: 'app-list-formula',
  templateUrl: './list-formula.component.html',
  styleUrls: ['./list-formula.component.scss']
})

export class ListFormulaComponent implements OnInit {
  @Output() selectedFormula = new EventEmitter<FormulaProductBaseModel>();

  listItems: FormulaProductBaseModel[];
  sortedData: FormulaProductBaseModel[];
  listOriginal: FormulaProductBaseModel[];
  currentSort: Sort = null;

  listFormulas: FormulaModel[] = [];
  listCollections: CollectionModel[] = [];
  listProducts: ProductModel[] = [];
  listBases: BaseModel[];
  listCustomer: CustomerModel[] = [];
  listFormulaCustomer: FormulaCustomerModel[] = [];

  pagenationMode: PagenationModel = new PagenationModel([], 0, 0, 15);

  filter: {
    formulaId: number,
    collectionId: number,
    productId: number,
    baseId: number,
    customerId: number
  };

  constructor(
    private storeService: StoreService,
    private formulaService: FormulaService,
    private collectionService: CollectionService,
    private productService: ProductService,
    private customerService: CustomerService,
    private fileService: FileService,
    private router: Router) {
  }

  ngOnInit() {
    this.listItems = [];
    this.listOriginal = [];
    this.sortedData = [];

    this.filter = {
      formulaId: undefined,
      collectionId: undefined,
      baseId: undefined,
      productId: undefined,
      customerId: undefined
    };

    if (this.storeService.getMachineData() != null && this.storeService.getMachineData().machineId > 0) {
      this.initMetadata();
    }
  }

  initMetadata() {
    // get list formula product base
    this.listItems = [];
    this.listOriginal = [];

    this.formulaService.getAllFormulaProductBase().subscribe(datas => {
      datas.map(fpb => {
        this.listItems.push(fpb);
        this.listOriginal.push(fpb);
      });

      this.updateRelativeData();
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

  updateRelativeData(): void {
    this.listFormulas = [];
    this.listCollections = [];
    this.listProducts = [];
    this.listBases = [];

    for (const item of this.listItems) {
      const exitsFormula = this.listFormulas.filter(_item => _item.formulaId === item.formula.formulaId);
      if (exitsFormula == null || exitsFormula.length === 0) {
        this.listFormulas.push(item.formula);
      }

      const exitsCollection = this.listCollections.filter(_item => _item.collectionId === item.formula.collection.collectionId);
      if (exitsCollection == null || exitsCollection.length === 0) {
        this.listCollections.push(item.formula.collection);
      }

      const exitsProduct = this.listProducts.filter(_item => _item.productId === item.productBase.product.productId);
      if (exitsProduct == null || exitsProduct.length === 0) {
        this.listProducts.push(item.productBase.product);
      }

      const existBase = this.listBases.filter(_item => _item.baseId === item.productBase.base.baseId);
      if (existBase == null || existBase.length === 0) {
        this.listBases.push(item.productBase.base);
      }
    }
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

  testElectron() {
    fileService.saveFile();
  }

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
        return fpb.formula.formulaId === this.filter.formulaId;
      });
    }

    if (this.filter.collectionId) {
      resFilter = resFilter.filter(fpb => {
        return fpb.formula.collection.collectionId === this.filter.collectionId;
      });
    }

    if (this.filter.productId) {
      resFilter = resFilter.filter(fpb => {
        return fpb.productBase.product.productId === this.filter.productId;
      });
    }

    if (this.filter.baseId) {
      resFilter = resFilter.filter(fpb => {
        return fpb.productBase.base.baseId === this.filter.baseId;
      });
    }

    if (this.filter.customerId) {
      resFilter = resFilter.filter(fpb => {
        let isExis = false;
        if (fpb.formula.listCustomer != null && fpb.formula.listCustomer.length > 0) {
          const index = fpb.formula.listCustomer.findIndex(customer => {
            return customer.customerId === this.filter.customerId;
          });
          if (index != null && index > -1) {
            isExis = true;
          }
        }
        return isExis;
      });
    }

    this.listItems = resFilter;
    this.updateRelativeData();

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

    function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
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
