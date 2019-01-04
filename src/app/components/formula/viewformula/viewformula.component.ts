import {Component, OnInit} from '@angular/core';
import {FormulaService} from '../../../services/formula/formula.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Select2Item} from '../../../models/colorant.model';
import {ModalService} from '../../../services/boostrap/modal.service';
import {
  DispenseDataModel,
  DispenseStepDataModel,
  DispenseTaskModel,
  DispenseTaskStepModel,
  MachineFormulaProductBaseLogModel
} from '../../../models/dispense.task.model';
import {DispenseTaskService} from '../../../services/dispensetask/dispensetask.service';
import {MAP_DISPENSE_TASK_STATE, MAP_DISPENSE_TASK_STEP_TYPE} from '../../../models/dispense.task.model';
import {FormulaColourantModel, FormulaProductBaseModel, ProductBaseCanModel} from '../../../models/formula_product_base';
import {ProductBaseService} from '../../../services/productbase/productbase.service';
import ConvertModelUtils from '../../../utils/convert-models-utils';
import {MachineService} from '../../../services/machine/machine.service';

@Component({
  selector: 'app-viewformula',
  templateUrl: './viewformula.component.html',
  styleUrls: ['./viewformula.component.scss']
})

export class ViewFormulaComponent implements OnInit {
  formulaProductBaseId: number;

  dbItem: FormulaProductBaseModel = null;
  listFormulaColorant: FormulaColourantModel[] = null;
  listProductBaseCan: ProductBaseCanModel[] = null;

  maxColorQuantity = 0;
  canSize = 1;
  selectProductBase: ProductBaseCanModel = null;
  numberOfCan = 1;
  listProductBase: Select2Item[] | null = null;


  // step 2. dispense colourant
  inProgress: boolean = false;
  currentTask: DispenseTaskModel | any = null;
  currentTaskStep: DispenseTaskStepModel | any = null;
  listColorant: any[] = null;
  errorMessage: string = null;

  constructor(private formulaService: FormulaService,
              private productBaseService: ProductBaseService,
              private modalService: ModalService,
              private dispenseTaskService: DispenseTaskService,
              private machineService: MachineService,
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
      this.dbItem = data;
      this.getRelativeData();
    });
  }

  roundNumber(num: number) {
    return Math.round(num * 100) / 100;
  }

  getRelativeData() {
    if (this.dbItem != null) {
      // Step 2. Get list Colorant of Formula
      this.formulaService.getListColorantOfFormula(this.dbItem.formula.formulaId).subscribe((data: FormulaColourantModel[]) => {
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
    }
  }

  changedCanSize(e: any): void {
    this.canSize = e.value;
  }

  beginDispense(modalId: string): void {
    this.machineService.validateQuantityColourant(this.canSize, this.listFormulaColorant, this.dbItem.formula).subscribe(res => {
      if (res.length === 0) {
        // create when not current task in process or task is done !!!!;
        if (this.currentTask == null || this.currentTask.status === MAP_DISPENSE_TASK_STATE.DONE) {
          const listPumpingTask = [];

          for (const colorant of this.listColorant) {
            const prepare_t = new DispenseTaskStepModel(MAP_DISPENSE_TASK_STEP_TYPE.PREPARE, null,
              (newDispenseTask, newDispenseStepTask) => {
                this.updateDispenseTaskData(newDispenseTask, newDispenseStepTask);
              });

            const pumping_t = new DispenseTaskStepModel(MAP_DISPENSE_TASK_STEP_TYPE.PUMPING, new DispenseStepDataModel(colorant.colorant,
              colorant.quantity * this.canSize), (newDispenseTask, newDispenseStepTask) => {
              this.updateDispenseTaskData(newDispenseTask, newDispenseStepTask);
            });

            listPumpingTask.push(prepare_t);
            listPumpingTask.push(pumping_t);
          }

          const stop_t = new DispenseTaskStepModel(MAP_DISPENSE_TASK_STEP_TYPE.FINISHED, null, (newDispenseTask, newDispenseStepTask) => {
            this.updateDispenseTaskData(newDispenseTask, newDispenseStepTask);
            this.numberOfCan -= 1;
            if (this.numberOfCan > 0) {
              this.beginDispense(modalId);
            }
            setTimeout(() => {
              this.openModal('print-formula-modal');
            }, 500);
          });

          listPumpingTask.push(stop_t);

          this.currentTask = new DispenseTaskModel('Dispense', listPumpingTask, new DispenseDataModel(this.dbItem, this.selectProductBase,
            this.canSize, this.numberOfCan), null);

          this.machineService.recordDispenseFormulaProductBase(MAP_DISPENSE_TASK_STATE.IN_PROGRESS, this.currentTask.taskId,
            this.currentTask.taskData.formulaProductBase, this.currentTask.taskData.canSize).subscribe((data: any) => {
            const item: MachineFormulaProductBaseLogModel = ConvertModelUtils.convertToDispenseFormulaProductBase(data);
            this.currentTask.taskId = item.machineFormulaProductBaseId;
            this.currentTask.status = item.status;
            this.currentTask.startTime = item.createdDate;

            this.dispenseTaskService.runDispenseTask(this.currentTask);
          });
        }

        setTimeout(() => {
          this.openModal(modalId);
        }, 200);
      } else {
        this.errorMessage = 'Not enough colorant quantity to dispense.';
        this.currentTask == null;
      }
    });
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }

  updateDispenseTaskData(newDispenseTask: DispenseTaskModel, newDispenseStepTask: DispenseTaskStepModel) {
    this.currentTask = newDispenseTask;
    this.currentTaskStep = newDispenseStepTask;

    if (this.currentTask.status === MAP_DISPENSE_TASK_STATE.IN_PROGRESS) {
      this.inProgress = true;
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  closeDispenseModel() {
    this.closeModal('print-formula-modal');
  }
}
