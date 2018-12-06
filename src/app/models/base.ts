export class BaseModel {
  private _baseId: number;
  private _baseCode: string;
  private _baseName: string;

  constructor() {

  }

  get baseId(): number {
    return this._baseId;
  }

  set baseId(value: number) {
    this._baseId = value;
  }

  get baseCode(): string {
    return this._baseCode;
  }

  set baseCode(value: string) {
    this._baseCode = value;
  }

  get baseName(): string {
    return this._baseName;
  }

  set baseName(value: string) {
    this._baseName = value;
  }
}

export class ColorantModel {
  private _colourantId: number;
  private _colourantCode: string;
  private _colourantName: string;
  private _density: string;
  private _pricePerUnit: number | null;
  private _surcharge: number | number;
  private _rbgHex: string | null;
  private _kind: string | null;


  get colourantId(): number {
    return this._colourantId;
  }

  set colourantId(value: number) {
    this._colourantId = value;
  }

  get colourantCode(): string {
    return this._colourantCode;
  }

  set colourantCode(value: string) {
    this._colourantCode = value;
  }

  get colourantName(): string {
    return this._colourantName;
  }

  set colourantName(value: string) {
    this._colourantName = value;
  }

  get density(): string {
    return this._density;
  }

  set density(value: string) {
    this._density = value;
  }

  get pricePerUnit(): number | null {
    return this._pricePerUnit;
  }

  set pricePerUnit(value: number | null) {
    this._pricePerUnit = value;
  }

  get surcharge(): number {
    return this._surcharge;
  }

  set surcharge(value: number) {
    this._surcharge = value;
  }

  get rbgHex(): string | null {
    return this._rbgHex;
  }

  set rbgHex(value: string | null) {
    this._rbgHex = value;
  }

  get kind(): string {
    return this._kind;
  }

  set kind(value: string) {
    this._kind = value;
  }
}


export class CollectionModel {
  private _collectionId: number;
  private _collectionName: string;
  private _description: string;
  private _createdDate: string;
  private _createBy: any;

  get collectionId(): number {
    return this._collectionId;
  }

  set collectionId(value: number) {
    this._collectionId = value;
  }

  get collectionName(): string {
    return this._collectionName;
  }

  set collectionName(value: string) {
    this._collectionName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
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
