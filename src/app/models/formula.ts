import {CollectionModel} from './collection';

export class FormulaModel {
  private _formulaId: number;
  private _formulaCode: string;
  private _formulaName: string;
  private _collection: CollectionModel;
  private _createdDate: Date;
  private _createBy: any | null;
  private _baseOnCan: number | 1;

  get baseOnCan(): number {
    return this._baseOnCan;
  }

  set baseOnCan(value: number) {
    this._baseOnCan = value;
  }

  get formulaId(): number {
    return this._formulaId;
  }

  set formulaId(value: number) {
    this._formulaId = value;
  }

  get formulaCode(): string {
    return this._formulaCode;
  }

  set formulaCode(value: string) {
    this._formulaCode = value;
  }

  get formulaName(): string {
    return this._formulaName;
  }

  set formulaName(value: string) {
    this._formulaName = value;
  }

  get collection(): CollectionModel {
    return this._collection;
  }

  set collection(value: CollectionModel) {
    this._collection = value;
  }


  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }

  get createBy(): any | null {
    return this._createBy;
  }

  set createBy(value: any | null) {
    this._createBy = value;
  }
}
