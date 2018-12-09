export class PagenationModel {
  private _listItems: any[];
  private _totalItem: number;
  private _pageIndex: number;
  private _maxPageItem: number;


  constructor(listItems: any[], totalItem: number, pageIndex: number, maxPageItem: number) {
    this._listItems = listItems;
    this._totalItem = totalItem;
    this._pageIndex = pageIndex;
    this._maxPageItem = maxPageItem;
  }

  get listItems(): any[] {
    return this._listItems;
  }

  set listItems(value: any[]) {
    this._listItems = value;
  }

  get totalItem(): number {
    return this._totalItem;
  }

  set totalItem(value: number) {
    this._totalItem = value;
  }

  get pageIndex(): number {
    return this._pageIndex;
  }

  set pageIndex(value: number) {
    this._pageIndex = value;
  }

  get maxPageItem(): number {
    return this._maxPageItem;
  }

  set maxPageItem(value: number) {
    this._maxPageItem = value;
  }
}
