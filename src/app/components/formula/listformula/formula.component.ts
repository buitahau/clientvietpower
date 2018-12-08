import {Component, OnInit} from '@angular/core';
import {FormulaService} from '../../../services/formula/formula.service';
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

  listColors = [];
  listCollections = [];
  listProducts = [];

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

    // get list formula product base
    this.listItems = [];
    this.listOriginal = [];
    this.formulaService.getListItems().subscribe(datas => {
      datas.map(fpb => {
        this.listItems.push(fpb);
        this.listOriginal.push(fpb);
      });
    });
  }

  viewFormula(id) {
    this.router.navigate([`../dashboard/view-formula/${id}`]);
  }

  onFilterChange() {
    this.refresh();
  }

  refresh() {
    debugger;
    let resFilter = this.listOriginal;
    if (this.filter.colorId) {
     // TODO : filter color in here
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
  }
}
