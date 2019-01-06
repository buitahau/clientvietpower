import {Component, Input, OnInit} from '@angular/core';
import {ProductBaseModel} from '../../../models/product_base';
import {CollectionModel} from '../../../models/collection';

@Component({
  selector: 'app-base-can',
  templateUrl: './base-can.component.html',
  styleUrls: ['./base-can.component.scss']
})
export class BaseCanComponent implements OnInit {
  @Input() productBase: ProductBaseModel;
  @Input() canSize: number;
  @Input() collection: CollectionModel;

  private _productBase: ProductBaseModel;
  private _canSize: number;
  private _collection: CollectionModel[];

  constructor() { }

  ngOnInit() {

  }

}
