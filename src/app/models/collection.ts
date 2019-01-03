
export class CollectionModel {
  private _collectionId: number;
  private _collectionName: string;
  private _description: string;
  private _createdDate: string;

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
}
