export class ProductModel {
  private _productId: number;
  private _productCode: string;
  private _productName: string;
  private _createdDate: string;
  private _createBy: any;

  get productId(): number {
    return this._productId;
  }

  set productId(value: number) {
    this._productId = value;
  }

  get productCode(): string {
    return this._productCode;
  }

  set productCode(value: string) {
    this._productCode = value;
  }

  get productName(): string {
    return this._productName;
  }

  set productName(value: string) {
    this._productName = value;
  }

  get createdDate(): string {
    return this._createdDate;
  }

  set createdDate(value: string) {
    this._createdDate = value;
  }

  get createBy(): any {
    return this._createBy;
  }

  set createBy(value: any) {
    this._createBy = value;
  }
}
