import {Injectable} from '@angular/core';
import {
  DispenseDataModel,
  DispenseStepDataModel,
  DispenseTaskModel, DispenseTaskStepModel,
  MAP_TASK_STATE
} from '../../models/dispense.task.model';
import {Observable} from 'rxjs';
import {MachineService} from '../machine/machine.service';
import {UserService} from '../user/user.service';
import {HttpService} from '../../shared/http/services/http.service';
import {FormulaProductBaseModel} from '../../models/formula_product_base';


export const MAP_DISPENSE_TASK_STATE = {
  WAITING: 'WAITING',
  IN_PROGRESS: 'START',
  DONE: 'DONE',
};

export const MAP_DISPENSE_TASK_STEP_TYPE = {
  PREPARE: 'prepare',
  PUMPING: 'pumping',
  FINISHED: 'finished'
};


@Injectable({
  providedIn: 'root'
})

export class DispenseTaskService {
  currentTask: DispenseTaskModel | null = null;
  currentTaskStep: DispenseTaskStepModel | null = null;
  listDispenseTask: DispenseTaskModel[];
  status: string;

  constructor(private machineService: MachineService, private userService: UserService, private http: HttpService) {
    this.listDispenseTask = [];
    this.currentTask = null;
    this.status = MAP_DISPENSE_TASK_STATE.WAITING;
  }

  runDispenseTask(_dispenseTask: DispenseTaskModel) {
    this.listDispenseTask.push(_dispenseTask);
    this.currentTask = _dispenseTask;
    this.processDispenseTask();
  }

  processDispenseTask(): void {
    if (this.currentTask != null) {
      this.status = MAP_TASK_STATE.IN_PROGRESS;
      this.currentTaskStep = getInProgressStepData(this.currentTask);

      this.currentTask.status = MAP_TASK_STATE.IN_PROGRESS;
      this.currentTaskStep.status = MAP_TASK_STATE.IN_PROGRESS;
      const waitTime = this.currentTaskStep.totalProcess;

      setTimeout(() => {
        this.notifyInDoneDispenseStepAction();
      }, waitTime);
    }

    function getInProgressStepData(_dispenseTask: DispenseTaskModel) {
      for (const step of _dispenseTask.childrenTask) {
        if (step.status === MAP_DISPENSE_TASK_STATE.WAITING) {
          return step;
        }
      }
      return null;
    }
  }

  notifyInDoneDispenseStepAction() {
    if (this.currentTaskStep != null) {
      if (this.currentTaskStep.type === MAP_DISPENSE_TASK_STEP_TYPE.PREPARE) {
        // do nothing
        this.currentTaskStep.status = MAP_DISPENSE_TASK_STATE.DONE;
        if (this.currentTaskStep.callBackFunction != null) {
          this.currentTaskStep.callBackFunction(this.currentTask, this.currentTaskStep);
        }
        this.processDispenseTask();

      } else if (this.currentTaskStep.type === MAP_DISPENSE_TASK_STEP_TYPE.PUMPING) {
        this.currentTaskStep.status = MAP_DISPENSE_TASK_STATE.DONE;

        this.recordDispenseTaskLog(this.currentTaskStep.type, this.currentTaskStep);

        if (this.currentTaskStep.callBackFunction != null) {
          this.currentTaskStep.callBackFunction(this.currentTask, this.currentTaskStep);
        }

        this.processDispenseTask();

      } else if (this.currentTaskStep.type === MAP_DISPENSE_TASK_STEP_TYPE.FINISHED) {
        this.updateDispenseTaskStatus(MAP_DISPENSE_TASK_STATE.DONE, this.currentTask.taskId, this.currentTask.taskData.formulaProductBase,
          this.currentTask.taskData.canSize);
      }
    }
  }

  recordDispenseTaskLog(type: string, data: DispenseTaskStepModel): void {
    if (type === MAP_DISPENSE_TASK_STEP_TYPE.PUMPING && data instanceof DispenseStepDataModel) {
      this.machineService.subtractionColourantMachine(data.colorant, data.quantity);
    }
  }

  updateDispenseTaskStatus(type: string, taskId: number, formulaProductBase: FormulaProductBaseModel, canSize: number) {
    this.machineService.recordDispenseFormulaProductBase(type, taskId, formulaProductBase, canSize).subscribe((datas) => {
      // update current data
      this.currentTaskStep.status = MAP_DISPENSE_TASK_STATE.DONE;
      this.currentTask.status = MAP_DISPENSE_TASK_STATE.DONE;
      this.status = MAP_DISPENSE_TASK_STATE.WAITING;

      if (this.currentTaskStep.callBackFunction != null) {
        this.currentTaskStep.callBackFunction(this.currentTask, this.currentTaskStep);
      }
    });
  }

  findDispenseTaskById(taskId: number) {
    return new Observable(observer => {
      let currentTask: DispenseTaskModel = null;
      for (const task of this.listDispenseTask) {
        if (taskId === task.taskId) {
          currentTask = task;
          break;
        }
      }

      setTimeout(() => {
        observer.next(currentTask);
      }, 1);
    });
  }

  getCurrentState() {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.status == null ? MAP_DISPENSE_TASK_STATE.WAITING : this.status);
      }, 1);
    });
  }
}
