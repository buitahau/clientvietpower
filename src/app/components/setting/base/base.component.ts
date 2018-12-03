import { Component, OnInit } from '@angular/core';
import {BaseDTO} from "../../../models/colorant.model";
import {Sort} from "@angular/material";
import {BaseService} from "../../../services/base/base.service";
import {BaseModel} from '../../../models/base';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {

  listBases: Array<any>;

  constructor(private baseService: BaseService) { }

  sortedData: BaseDTO[];

  ngOnInit() {
    this.sortedData = this.baseService.sortData(null);
    this.fletchData() ;
  }

  sortData(sort: Sort) {
    this.sortedData =  this.baseService.sortData(sort);
  }

  fletchData() {
    this.baseService.getListBaseFromServer().subscribe((data: any) => {
      this.listBases = [];
      for (let i = 0; i < data.length; i++) {
        this.listBases.push(this.convertFromObjectServer2Model(data[i]))
      }
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
