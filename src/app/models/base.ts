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
