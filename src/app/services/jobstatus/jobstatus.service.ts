import {Injectable} from '@angular/core';
import {DispenseDataModel, DispenseStepDataModel, TaskModel} from '../../models/job.status.model';
import {Observable} from 'rxjs';
import {MachineService} from '../machine/machine.service';
import {UserService} from '../user/user.service';

export const MAP_JOB_STATE = {
  WAITING: 'WAITING',
  IN_PROGRESS: 'IN-PROGRESS',
};

@Injectable({
  providedIn: 'root'
})

export class JobStatusService {
  listTask: TaskModel[];
  // listAddedJob: TaskModel[];
  currentTaskId: number;
  currentTask: TaskModel | null = null;
  status: string;
  listSubcribleComponent;

  constructor(private machineService: MachineService, private userService: UserService) {
    this.loadCurrentData();
    this.currentTask = null;
    this.currentTaskId = 1;
    this.status = MAP_JOB_STATE.WAITING;
    this.listSubcribleComponent = {};
  }

  loadCurrentData(): void {
    this.listTask = [];
  }

  getState(): string {
    return this.status;
  }

  getListJob() {
    return this.listTask;
  }

  getCurrentJob() {
    return this.listTask;
  }

  update(): void {
    if (this.status === MAP_JOB_STATE.WAITING && this.listTask != null && this.listTask.length > 0) {
      this.currentTask = this.listTask[0];
      this.currentTask.run(this);
      this.status = MAP_JOB_STATE.IN_PROGRESS;
    }
  }

  record(type: string, data: DispenseDataModel | DispenseStepDataModel | null): void {
    if (type === 'pumping' && data instanceof DispenseStepDataModel) {
      this.machineService.subtractionColourantMachine(data.colorant, data.quantity);

    } else if (type === 'finished' && data instanceof DispenseDataModel) {
      this.machineService.recordDispenseFormulaProductBase(data.formulaProductBase, data.canSize);
      this.status = MAP_JOB_STATE.WAITING;
    }
  }

  addJob(job: TaskModel, component) {
    job.taskId = this.currentTaskId;
    this.listTask.push(job);
    this.currentTaskId++;
    this.subcribleTheTask(job.taskId, component);
    this.update();
  }

  removeJob(job: TaskModel) {
    for (let i = 0; i < this.listTask.length; i++) {
      const currentJob: TaskModel = this.listTask[i];
      if (currentJob.taskId === job.taskId) {
        this.listTask.splice(i, 1);
        break;
      }
    }
  }

  publishTask(task: TaskModel) {
    const listComponentRegister = this.listSubcribleComponent[task.taskId];
    if (listComponentRegister != null && listComponentRegister.length > 0) {
      for (const item of listComponentRegister) {
        try {
          item.triggerUpdateTask(task);
        } catch (e) {
          console.log('The component does support this method !! Please implement ');
          console.log(item);
        }
      }

    }
  }

  subcribleTask(taskId: number, component: any) {
    const taskObservable = new Observable(observer => {
      let currentTask: TaskModel = null;
      for (const task of this.listTask) {
        if (taskId === task.taskId) {
          currentTask = task;
          break;
        }
      }

      setTimeout(() => {
        observer.next(currentTask);
      }, 1);
    });
    this.subcribleTheTask(taskId, component);
    return taskObservable;
  }

  subcribleTheTask(taskId: number, component) {
    let listComponentRegister = this.listSubcribleComponent[taskId];

    if (listComponentRegister == null || listComponentRegister.length === 0) {
      listComponentRegister = [];
    }

    listComponentRegister.push(component);
    this.listSubcribleComponent[taskId] = listComponentRegister;
  }


}
