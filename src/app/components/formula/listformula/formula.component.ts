import {Component, OnInit} from '@angular/core';
import {FormulaService} from '../../../services/formula/formula.service';
import {Router} from '@angular/router';
import {CollectionService} from '../../../services/collection/collection.service';
import {ProductService} from '../../../services/product/product.service';
import {PagenationModel} from '../../../models/pagination.model';
import {FormulaProductBaseModel} from '../../../models/formula_product_base';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})

export class FormulaComponent implements OnInit {
  listItems: FormulaProductBaseModel[] = [];
  listOriginal = [];

  listFormulas = [];
  listCollections = [];
  listProducts = [];
  pagenationMode: PagenationModel = new PagenationModel([], 0, 0, 15);

  constructor(
    private formulaService: FormulaService,
    private collectionService: CollectionService,
    private productService: ProductService,
    private router: Router) {
  }

  filter = {
    formulaId: undefined,
    productId: undefined,
    collectionId: undefined
  };

  ngOnInit() {
    this.initMetadata();
  }

  initMetadata() {
    this.formulaService.postData();
    this.formulaService.postData1();
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

      this.updatePagenationMode();
    });
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
    this.listItems = resFilter;

    this.pagenationMode.pageIndex = 0;
    this.updatePagenationMode();
  }

  goToPage(pageIndex: number) {
    this.pagenationMode.pageIndex = pageIndex;
    this.updatePagenationMode();
  }
}
