import {Component, OnInit} from '@angular/core';
import {FormulaService} from '../../../services/formula/formula.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormulaDTO, ProductBaseCanDTO, Select2Item} from '../../../models/colorant.model';
import {ProductBaseService} from '../../../services/productbase/productbase.service';
import {ModalService} from '../../../services/boostrap/modal.service';

export interface BackgroundTask {
  type: string;
  time: number;
  data: any | null;
// {type: 'pumping', time: 2000, 'data': colorant}
}

@Component({
  selector: 'app-viewformula',
  templateUrl: './viewformula.component.html',
  styleUrls: ['./viewformula.component.scss']
})
export class ViewFormulaComponent implements OnInit {
  id: number;
  dbItem: FormulaDTO | null = null;
  quantity = 0;


  canSize = 1;
  numberOfCan = 1;
  selectProductBase: ProductBaseCanDTO = null;
  listProductBase: Select2Item[] | null = null;


  isInProgress = false;
  isStartProgress = false;
  listBackGroundTask: BackgroundTask[] = [];
  currentBackgroundTask: any  = null;
  currentBackgroundTaskIndex: number = 0;

  constructor(private formulaService: FormulaService, private productBaseService: ProductBaseService, private modalService: ModalService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.fetchDBItem();
    });
  }

  fetchDBItem() {
    this.selectProductBase = null;
    this.dbItem = this.formulaService.findById(this.id);

    for (let colorant of this.dbItem.listColorant) {
      if (this.quantity === 0 || this.quantity < colorant.quantity) {
        this.quantity = colorant.quantity;
      }
    }

    let listProductBase = this.productBaseService.filterByProductCodeAndBaseType(this.dbItem.product.productCode, this.dbItem.base.type);
    this.listProductBase = [];

    for (let productBase of listProductBase) {
      this.listProductBase.push({id: productBase.can, text: productBase.can + ' ' + productBase.unit});
      if (productBase.can === this.canSize) {
        this.selectProductBase = productBase;
      }
    }

    if (this.selectProductBase == null && listProductBase.length > 0) {
      this.selectProductBase = listProductBase[0];
      this.canSize = this.selectProductBase.can;
    }
  }

  changedCanSize(e: any): void {
    this.canSize = e.value;
  }

  beginDispense(id: string): void {
    this.openModal(id);

    if (! this.isStartProgress) {
      this.listBackGroundTask = [];
      this.currentBackgroundTaskIndex = 0;
      this.currentBackgroundTask = null;

      this.listBackGroundTask.push({type: 'prepare', time: 6000});
      for (let colorant of this.dbItem.listColorant) {
        this.listBackGroundTask.push({type: 'pumping', time: colorant.quantity / 2 * 3000, 'data': colorant});
      }
      this.listBackGroundTask.push({type: 'finished', time: 1000});

      this.isStartProgress = true;
      this.runBackGroundTask();
    }
  }

  runBackGroundTask(): void {
    this.isInProgress = true;
    this.currentBackgroundTask = this.listBackGroundTask[this.currentBackgroundTaskIndex];

    if (this.currentBackgroundTask != null) {
      setTimeout(() => {
        if ('pumping' === this.currentBackgroundTask.type) {
          this.dbItem.listColorant[this.currentBackgroundTaskIndex - 1].quantity = 0;
        }

        this.currentBackgroundTaskIndex += 1;
        this.runBackGroundTask();

      }, this.currentBackgroundTask.time);
    } else {
      this.isInProgress = false;
      alert('finished !!');
    }

  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
