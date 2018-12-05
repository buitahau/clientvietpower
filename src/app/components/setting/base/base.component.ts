import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../../services/base/base.service';
import {BaseModel} from '../../../models/base';
import {Sort} from '@angular/material';

// const _ = require('lodash');

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {

  listBases: Array<any>;

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.fletchData() ;
  }

  sortData(sort: Sort) {
    this.listBases = this.listBases.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      return compare(a.baseCode, b.baseCode, isAsc);
    });

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  fletchData() {
    this.baseService.getListBaseFromServer().subscribe((data: any) => {
      this.listBases = [];
      data.map(base => {
        this.listBases.push(this.convertFromObjectServer2Model(base));
      });
    });
  }

  convertFromObjectServer2Model(object: any) {
    const baseModel = new BaseModel();
    baseModel.baseCode = object.baseCode;
    baseModel.baseId = object.baseId;
    baseModel.baseName = object.baseName;
    return baseModel;
  }

}
