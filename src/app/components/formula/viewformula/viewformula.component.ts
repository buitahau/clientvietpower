import {Component, OnInit} from '@angular/core';
import {FormulaService} from '../../../services/formula/formula.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Select2Item} from '../../../models/colorant.model';
import {ModalService} from '../../../services/boostrap/modal.service';
import {DispenseDataModel, DispenseStepDataModel, TaskModel} from '../../../models/job.status.model';
import {JobStatusService, MAP_JOB_STATE} from '../../../services/jobstatus/jobstatus.service';
import {FormulaColourantModel, FormulaProductBaseModel, ProductBaseCanModel} from '../../../models/formula_product_base';
import {ProductBaseService} from '../../../services/productbase/productbase.service';
import ConvertModelUtils from '../../../utils/convert-models-utils';

@Component({
  selector: 'app-viewformula',
  templateUrl: './viewformula.component.html',
  styleUrls: ['./viewformula.component.scss']
})

export class ViewFormulaComponent implements OnInit {
  formulaProductBaseId: number;

  // formula Product Base
  dbItem: FormulaProductBaseModel = null;
  listFormulaColorant: FormulaColourantModel[] = null;
  listProductBaseCan: ProductBaseCanModel[] = null;

  maxColorQuantity = 0;
  canSize = 1;
  selectProductBase: ProductBaseCanModel = null;
  numberOfCan = 1;
  listProductBase: Select2Item[] | null = null;

  currentJob: TaskModel = null;
  listColorant: any[] = null;

  isNotBusy: boolean;
  isTaskDone: boolean;

  constructor(private formulaService: FormulaService,
              private productBaseService: ProductBaseService,
              private modalService: ModalService,
              private jobStatusService: JobStatusService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formulaProductBaseId = parseInt(params.id);
      this.listFormulaColorant = [];
      this.listProductBaseCan = [];
      this.fetchDBItem();
    });
  }

  fetchDBItem() {
    this.selectProductBase = null;

    // step 1. Get Formula By Id
    this.formulaService.findFormulaProductBaseById(this.formulaProductBaseId).subscribe((data: any) => {
      this.dbItem = ConvertModelUtils.convertToFormulaProductBaseObject(data);
      this.getRelativeData();
    });
  }

  getRelativeData() {
    if (this.dbItem != null) {
      // Step 2. Get list Colorant of Formula
      this.formulaService.getListColorantOfFormula(this.dbItem.formula.formulaId).subscribe((data: any) => {
        this.listFormulaColorant = data;

        // Step 4. Process data before render
        this.listColorant = [];

        for (const colorant of this.listFormulaColorant) {
          this.listColorant.push({colorant: colorant.colourant, quantity: colorant.quantity});

          if (this.maxColorQuantity === 0 || this.maxColorQuantity < colorant.quantity) {
            this.maxColorQuantity = colorant.quantity;
          }
        }
      });

      // Step 3. Get List Product Base Can of Formula
      this.formulaService.getListProductBaseCan(this.dbItem.productBase.productBaseId).subscribe(datas => {
        this.listProductBaseCan = datas;

        this.listProductBase = [];

        for (const productBaseCan of this.listProductBaseCan) {
          this.listProductBase.push({
            id: productBaseCan.can,
            text: productBaseCan.can + ' ' + (productBaseCan.unit === null ? 'L' : productBaseCan.unit)
          });

          if (productBaseCan.can === this.canSize) {
            this.selectProductBase = productBaseCan;
          }
        }

        if (this.selectProductBase == null && this.listProductBaseCan.length > 0) {
          this.selectProductBase = this.listProductBaseCan[0];
          this.canSize = this.selectProductBase.can;
        }
      });

      this.isTaskDone = false;

      this.isNotBusy = this.jobStatusService.getState() === MAP_JOB_STATE.WAITING;
    }
  }

  changedCanSize(e: any): void {
    this.canSize = e.value;
  }

  beginDispense(modalId: string): void {

    if (this.isNotBusy) {
      this.isTaskDone = false;
      const listPumpingTask = [];

      for (const colorant of this.listColorant) {
        const prepare_t = new TaskModel('prepare', null, null, null);
        const pumping_t = new TaskModel('pumping', null, new DispenseStepDataModel(colorant.colorant,
          colorant.quantity * this.canSize), null);
        listPumpingTask.push(prepare_t);
        listPumpingTask.push(pumping_t);
      }

      const stop_t = new TaskModel('finished', null, null, () => {
        this.isTaskDone = true;
        setTimeout(() => {
          this.openModal('print-formula-modal');
        }, 500);
      });

      listPumpingTask.push(stop_t);

      this.currentJob = new TaskModel('Dispense', listPumpingTask,
        new DispenseDataModel(this.dbItem, this.selectProductBase, this.canSize, this.numberOfCan), null);
      this.jobStatusService.addJob(this.currentJob);
    }

    this.openModal(modalId);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
