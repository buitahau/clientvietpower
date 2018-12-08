import {CollectionModel} from './collection';

export class FormulaModel {
  private _formulaId: number;
  private _formulaCode: string;
  private _formulaName: string;
  private _collection: CollectionModel;

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
}
