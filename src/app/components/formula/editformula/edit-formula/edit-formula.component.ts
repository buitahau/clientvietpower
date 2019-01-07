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
import {BaseModel} from '../../../../models/base';

@Component({
  selector: 'app-edit-formula',
  templateUrl: './edit-formula.component.html',
  styleUrls: ['./edit-formula.component.scss']
})
export class EditFormulaComponent implements OnInit {
  formulaProductBaseId: number;
  selectedProductId: number;
  selectedProductBaseId: number;

  selectedProduct: ProductModel;
  selectedProductBase: ProductBaseModel;

  viewMode: string = null;
  dbItem: FormulaProductBaseModel = null;
  listProducts: ProductModel[] = null;
  listProductBases: ProductBaseModel[] = null;
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
    });
  }

  generateNewFormulaProductBase() {
    const collection = new CollectionModel();
    const formula = new FormulaModel();
    formula.collection = collection;
    formula.baseOnCan = 1;

    const product = new ProductModel();
    const base = new BaseModel();
    const productBase = new ProductBaseModel();
    productBase.product = product;
    productBase.base = base;

    this.dbItem = new FormulaProductBaseModel();
    this.dbItem.formula = formula;
    this.dbItem.productBase = productBase;
    this.loadColourantDatas();
  }

  loadCurrentFormulaProductBase() {
    this.formulaService.findFormulaProductBaseById(this.formulaProductBaseId).subscribe((data: any) => {
      this.dbItem = data;
      this.selectedProductBase = this.dbItem.productBase;
      this.selectedProduct = this.dbItem.productBase.product;

      this.selectedProductBaseId = this.selectedProductBase.productBaseId;
      this.selectedProductId = this.selectedProduct.productId;

      this.getListProductBase();
      this.loadColourantDatas();
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

  getListProductBase() {
    const selectedProduct = this.listProducts.find((item) => {
      return item.productId == this.selectedProductId;
    });

    if (selectedProduct != null) {
      this.selectedProduct = selectedProduct;
      this.dbItem.productBase.product = this.selectedProduct;
    }

    this.listProductBases = [];
    this.productService.getListProductBaseFromProduct(this.selectedProductId).subscribe(datas => {
      this.listProductBases = datas;
      console.log(this.dbItem.productBase.product);
    });
  }

  updateCurrentProductBase() {
    const selectedProductBase = this.listProductBases.find((item) => {
      return item.productBaseId == this.selectedProductBaseId && item.product.productId == this.selectedProductId;
    });

    if (selectedProductBase != null) {
      this.selectedProductBase = selectedProductBase;
      this.dbItem.productBase = this.selectedProductBase;
    }
  }

  loadColourantDatas() {
    this.colourantService.getListItems().subscribe(datas => {
      this.listColourants = [];

      for (const colour of datas) {
        const formulaColourant = new FormulaColourantModel();
        formulaColourant.colourant = colour;
        formulaColourant.formula = this.dbItem.formula;
        formulaColourant.quantity = null;

        this.listColourants.push(formulaColourant);
      }

      if (this.dbItem != null && this.dbItem.formulaProductBaseId != null && this.dbItem.formulaProductBaseId > 0) {
        this.formulaService.getListColorantOfFormula(this.dbItem.formula.formulaId).subscribe((result: FormulaColourantModel[]) => {
          const listColourantDb: FormulaColourantModel[] = result;

          for (const colour of listColourantDb) {
            const existColourantIndex = this.listColourants.findIndex((item) => {
              return item.colourant.colourantId === colour.colourant.colourantId;
            });

            if (existColourantIndex != null) {
              this.listColourants[existColourantIndex].quantity = colour.quantity;
            }
          }
        });
      }
    });
  }

  getMaxColourantValue(listFormulaColorant: FormulaColourantModel[]) {
    let maxQuantity = 0;
    for (const c of listFormulaColorant) {
      if (c.quantity != null && c.quantity > 0) {
        if (maxQuantity == null || maxQuantity < c.quantity) {
          maxQuantity = c.quantity;
        }
      }
    }
    return maxQuantity;
  }

  saveOrUpdateFormula() {
    this.formulaService.saveOrUpdateFormulaData(this.dbItem.formulaProductBaseId, this.dbItem.formula, this.selectedProductBase,
      this.listColourants).subscribe((datas) => {
      console.log(datas);
    });
  }

  goToFormulaPage() {
    this.router.navigate([`../dashboard/formula`]);
  }

}
