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
