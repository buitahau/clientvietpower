import {Component, OnInit} from '@angular/core';
import {FormulaService} from '../../../services/formula/formula.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormulaDTO, ProductBaseCanDTO, Select2Item} from '../../../models/colorant.model';
import {ProductBaseService} from '../../../services/productbase/productbase.service';
import {ModalService} from '../../../services/boostrap/modal.service';
import {JobStatusModel} from '../../../models/job.status.model';
import {JobStatusService} from '../../../services/jobstatus/jobstatus.service';

export interface BackgroundTask {
  type: string;
  time: number;
  colorant: any | null;
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


  currentJob: JobStatusModel = null;
  isInProgress = false;
  isStartProgress = false;
  listBackGroundTask: BackgroundTask[] = [];
  currentBackgroundTask: any = null;
  currentBackgroundTaskIndex: number = 0;
  listColorant: any[] = null;

  constructor(private formulaService: FormulaService,
              private productBaseService: ProductBaseService,
              private modalService: ModalService,
              private jobStatusService: JobStatusService,
              private router: Router, private route: ActivatedRoute) {
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

    this.listColorant = [];
    for (const colorant of this.dbItem.listColorant) {
      this.listColorant.push({colorant: colorant.colorant, quantity: colorant.quantity});

      if (this.quantity === 0 || this.quantity < colorant.quantity) {
        this.quantity = colorant.quantity;
      }
    }

    const listProductBase = this.productBaseService.filterByProductCodeAndBaseType(this.dbItem.product.productCode, this.dbItem.base.type);
    this.listProductBase = [];

    for (const productBase of listProductBase) {
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

    if (!this.isStartProgress) {
      this.listBackGroundTask = [];
      this.currentBackgroundTaskIndex = 0;
      this.currentBackgroundTask = null;

      for (const colorant of this.listColorant) {
        this.listBackGroundTask.push({type: 'prepare', time: 2000, colorant: null});
        this.listBackGroundTask.push({type: 'pumping', time: colorant.quantity / 2 * 3000, colorant: colorant});
      }
      this.listBackGroundTask.push({type: 'finished', time: 1000, colorant: null});

      this.currentJob = new JobStatusModel('Dispense', this.listBackGroundTask);
      this.jobStatusService.addJob(this.currentJob);
      this.isStartProgress = true;
      this.isInProgress = true;
      this.currentJob.start();

      this.runBackGroundTask();
    }
  }

  runBackGroundTask(): void {
    this.currentBackgroundTask = this.listBackGroundTask[this.currentBackgroundTaskIndex];

    if (this.currentBackgroundTask != null) {
      setTimeout(() => {
        if ('finished' === this.currentBackgroundTask.type) {
          this.isInProgress = false;
          this.isStartProgress = false;
          this.currentJob.stop();
          this.openModal('print-formula-modal');

        } else {
          if ('pumping' === this.currentBackgroundTask.type) {
            this.currentBackgroundTask.colorant.quantity = 0;
            this.currentJob.update();
          }

          this.currentBackgroundTaskIndex += 1;
          this.runBackGroundTask();
        }
      }, this.currentBackgroundTask.time);
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
