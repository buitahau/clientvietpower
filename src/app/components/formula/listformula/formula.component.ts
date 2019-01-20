import {Component, OnInit} from '@angular/core';
import {FormulaService} from '../../../services/formula/formula.service';
import {Router} from '@angular/router';
import {CollectionService} from '../../../services/collection/collection.service';
import {ProductService} from '../../../services/product/product.service';
import {PagenationModel} from '../../../models/pagination.model';
import {FormulaProductBaseModel} from '../../../models/formula_product_base';
import {FormulaCustomerModel} from '../../../models/formulacustomer';
import {FormulaModel} from '../../../models/formula';
import {CollectionModel} from '../../../models/collection';
import {ProductModel} from '../../../models/product';
import {CustomerService} from '../../../services/customer/customer.service';
import {CustomerModel, CustomerSelectedModel} from '../../../models/customer';
import {fbind} from 'q';
import {MachineModel} from '../../../models/user.model';
import {StoreService} from '../../../services/store/store.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})

export class FormulaComponent implements OnInit {
  listItems: FormulaProductBaseModel[] = [];
  listOriginal = [];

  listFormulas: FormulaModel[] = [];
  listCollections: CollectionModel[] = [];
  listProducts: ProductModel[] = [];
  listCustomer: CustomerModel[] = [];
  listFormulaCustomer: FormulaCustomerModel[] = [];

  pagenationMode: PagenationModel = new PagenationModel([], 0, 0, 15);

  constructor(
    private storeService: StoreService,
    private formulaService: FormulaService,
    private collectionService: CollectionService,
    private productService: ProductService,
    private customerService: CustomerService,
    private router: Router) {
  }

  filter = {
    formulaId: undefined,
    productId: undefined,
    collectionId: undefined,
    customerId: undefined
  };

  ngOnInit() {
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
      datas.map(c => {
        me.listFormulas.push(c);
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

  viewFormula(formulaProductBaseId) {
    this.router.navigate([`../dashboard/view-formula/${formulaProductBaseId}`]);
  }

  onFilterChange() {
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

    this.pagenationMode.pageIndex = 0;
    this.updatePagenationMode();
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
