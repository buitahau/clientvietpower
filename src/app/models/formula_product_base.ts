import {FormulaModel} from './formula';
import {ProductBaseModel} from './product_base';
import {ColorantModel} from './colorant';

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

export class FormulaColourantModel {
  private _formulaColourantId: number;
  private _formula: FormulaModel;
  private _colourant: ColorantModel;
  private _quantity: number;

  get formulaColourantId(): number {
    return this._formulaColourantId;
  }

  set formulaColourantId(value: number) {
    this._formulaColourantId = value;
  }

  get formula(): FormulaModel {
    return this._formula;
  }

  set formula(value: FormulaModel) {
    this._formula = value;
  }

  get colourant(): ColorantModel {
    return this._colourant;
  }

  set colourant(value: ColorantModel) {
    this._colourant = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}


export class ProductBaseCanModel {
  private _productBaseCanId: number;
  private _productBase: ProductBaseModel;
  private _can: number;
  private _unit: string;
  private _pricePerCan: number;
  private _barCode: number;
  private _percentage: number;


  get productBaseCanId(): number {
    return this._productBaseCanId;
  }

  set productBaseCanId(value: number) {
    this._productBaseCanId = value;
  }

  get productBase(): ProductBaseModel {
    return this._productBase;
  }

  set productBase(value: ProductBaseModel) {
    this._productBase = value;
  }

  get can(): number {
    return this._can;
  }

  set can(value: number) {
    this._can = value;
  }

  get unit(): string {
    return this._unit;
  }

  set unit(value: string) {
    this._unit = value;
  }

  get pricePerCan(): number {
    return this._pricePerCan;
  }

  set pricePerCan(value: number) {
    this._pricePerCan = value;
  }

  get barCode(): number {
    return this._barCode;
  }

  set barCode(value: number) {
    this._barCode = value;
  }

  get percentage(): number {
    return this._percentage;
  }

  set percentage(value: number) {
    this._percentage = value;
  }
}
