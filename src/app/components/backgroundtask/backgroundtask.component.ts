import {Component, Input, OnInit} from '@angular/core';
import {MachineFormulaProductBaseLogModel} from '../../models/dispense.task.model';
import {MachineService} from '../../services/machine/machine.service';
import {Sort} from '@angular/material';
import {Router} from '@angular/router';
import {MachineModel} from '../../models/user.model';
import {StoreService} from '../../services/store/store.service';
import {FormulaProductBaseModel} from '../../models/formula_product_base';


@Component({
  selector: 'app-backgroundtask',
  templateUrl: './backgroundtask.component.html',
  styleUrls: ['./backgroundtask.component.scss']
})
export class BackgroundTaskComponent implements OnInit {
  selectedFormula: FormulaProductBaseModel;

  listItems: MachineFormulaProductBaseLogModel [] | any;
  listBackgroundTask: MachineFormulaProductBaseLogModel [] | any;
  currentBackgroundTask: MachineFormulaProductBaseLogModel = null;
  machine: MachineModel;

  constructor(private storeService: StoreService,
              private machineService: MachineService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.machine = this.storeService.getMachineData();
    if (this.machine != null && this.machine.machineId > 0) {
      this.machineService.findAllDispenseTask().subscribe((datas: MachineFormulaProductBaseLogModel []) => {
        this.listItems = datas;
        this.listBackgroundTask = this.listItems;
      });
    }
  }

  viewCurrentTask(task: MachineFormulaProductBaseLogModel) {
    this.currentBackgroundTask = task;
    this.selectedFormula = this.currentBackgroundTask.formulaProductBase;
  }

  clearSelectedFormula() {
    this.currentBackgroundTask = null;
    this.selectedFormula = null;
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();

    if (!sort.active || sort.direction === '') {
      this.listBackgroundTask = data;
      return;
    }

    this.listBackgroundTask = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'machineFormulaProductBaseId':
          return compare(a.machineFormulaProductBaseId, b.machineFormulaProductBaseId, isAsc);
        case 'approximateColor':
          return compare(a.formulaProductBase.formula.approximateColor, b.formulaProductBase.formula.approximateColor, isAsc);
        case 'formulaName':
          return compare(a.formulaProductBase.formula.formulaName, b.formulaProductBase.formula.formulaName, isAsc);
        case 'collectionName':
          return compare(a.formulaProductBase.formula.collection.collectionName, b.formulaProductBase.formula.collection.collectionName,
            isAsc);
        case 'productName':
          return compare(a.formulaProductBase.productBase.product.productName, b.formulaProductBase.productBase.product.productName, isAsc);
        case 'canSize':
          return compare(a.canSize, b.canSize, isAsc);
        case 'status':
          return compare(a.status, b.status, isAsc);
        case 'createdDate':
          return compare(a.createdDate, b.createdDate, isAsc);
        case 'finishedDate':
          return compare(a.finishedDate == null ? 0 : 1, b.finishedDate == null ? 0 : 1, isAsc);
        default:
          return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
