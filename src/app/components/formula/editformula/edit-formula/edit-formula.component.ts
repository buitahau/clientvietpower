import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormulaColourantModel, FormulaProductBaseModel} from '../../../../models/formula_product_base';
import {FormulaModel} from '../../../../models/formula';
import {ProductBaseModel} from '../../../../models/product_base';
import {CollectionService} from '../../../../services/collection/collection.service';
import {FormulaService} from '../../../../services/formula/formula.service';
import {ProductService} from '../../../../services/product/product.service';
import {ProductModel} from '../../../../models/product';
import {CollectionModel} from '../../../../models/collection';
import {ColourantService} from '../../../../services/colorant/colorant.service';

@Component({
  selector: 'app-edit-formula',
  templateUrl: './edit-formula.component.html',
  styleUrls: ['./edit-formula.component.scss']
})
export class EditFormulaComponent implements OnInit {
  formulaProductBaseId: number;
  viewMode: string = null;
  dbItem: FormulaProductBaseModel = null;
  listProducts: ProductModel[] = null;
  listCollections: CollectionModel[] = null;
  listColourants: FormulaColourantModel[] = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private colourantService: ColourantService,
              private formulaService: FormulaService,
              private collectionService: CollectionService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formulaProductBaseId = params.id != null && params.id.trim() !== '' ? parseInt(params.id) : null;
      if (this.formulaProductBaseId != null && this.formulaProductBaseId > 0) {
        this.viewMode = 'Edit';
        this.loadCurrentFormulaProductBase();
      } else {
        this.viewMode = 'Add';
        this.generateNewFormulaProductBase();
      }

      this.loadRelativeData();
      this.loadColourantDatas();
    });
  }

  generateNewFormulaProductBase() {
    const formula = new FormulaModel();
    const productBase = new ProductBaseModel();

    this.dbItem = new FormulaProductBaseModel();
    this.dbItem.formula = formula;
    this.dbItem.productBase = productBase;
  }

  loadCurrentFormulaProductBase() {
    this.formulaService.findFormulaProductBaseById(this.formulaProductBaseId).subscribe((data: any) => {
      this.dbItem = data;
    });
  }

  loadRelativeData() {
    this.listProducts = [];
    this.productService.getListItems().subscribe(datas => {
      this.listProducts = datas;
    });

    this.listCollections = [];
    this.collectionService.getListItems().subscribe(datas => {
      this.listCollections = datas;
    });
  }

  loadColourantDatas() {
    this.colourantService.getListItems().subscribe(datas => {
      this.listColourants = [];

      for (const colour of datas) {
        const formulaColourant = new FormulaColourantModel();
        formulaColourant.colourant = colour;
        formulaColourant.quantity = null;

        this.listColourants.push(formulaColourant);
      }

      if (this.dbItem != null && this.dbItem.formulaProductBaseId != null && this.dbItem.formulaProductBaseId > 0) {
        this.formulaService.getListColorantOfFormula(this.dbItem.formula.formulaId).subscribe((result: FormulaColourantModel[]) => {
          const listColourantDb: FormulaColourantModel[] = result;

          for (const colour of listColourantDb) {
            const existColourantIndex = this.listColourants.findIndex((item) => {
              return item._colourant.colourantId === colour.colourant.colourantId;
            });

            if (existColourantIndex != null) {
              this.listColourants[existColourantIndex].quantity = colour.quantity;
            }
          }
        });
      }
    });
  }

  saveFormula() {

  }

}
