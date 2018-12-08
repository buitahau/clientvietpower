import {FormulaModel} from './formula';
import {ProductBaseModel} from './product_base';

export class FormulaProductBaseModel {
  private _formulaProductBaseId: number;
  private _formula: FormulaModel;
  private _productBase: ProductBaseModel;

  get formulaProductBaseId(): number {
    return this._formulaProductBaseId;
  }

  set formulaProductBaseId(value: number) {
    this._formulaProductBaseId = value;
  }

  get formula(): FormulaModel {
    return this._formula;
  }

  set formula(value: FormulaModel) {
    this._formula = value;
  }

  get productBase(): ProductBaseModel {
    return this._productBase;
  }

  set productBase(value: ProductBaseModel) {
    this._productBase = value;
  }
}
