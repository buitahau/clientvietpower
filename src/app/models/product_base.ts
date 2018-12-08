import {ProductModel} from './product';
import {BaseModel} from './base';

export class ProductBaseModel {
  private _productBaseId: number;
  private _product: ProductModel;
  private _base: BaseModel;
  private _rbgHex: string;
  private _density: number;

  get productBaseId(): number {
    return this._productBaseId;
  }

  set productBaseId(value: number) {
    this._productBaseId = value;
  }

  get product(): ProductModel {
    return this._product;
  }

  set product(value: ProductModel) {
    this._product = value;
  }

  get base(): BaseModel {
    return this._base;
  }

  set base(value: BaseModel) {
    this._base = value;
  }

  get rbgHex(): string {
    return this._rbgHex;
  }

  set rbgHex(value: string) {
    this._rbgHex = value;
  }

  get density(): number {
    return this._density;
  }

  set density(value: number) {
    this._density = value;
  }
}
