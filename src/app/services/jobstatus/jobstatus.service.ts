import {Injectable} from '@angular/core';
import {TaskModel} from '../../models/job.status.model';

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

  constructor() {
    this.loadCurrentData();
    this.currentTask = null;
    this.currentTaskId = 1;
    this.status = MAP_JOB_STATE.WAITING;
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

  record(type: string, data): void {
    if (type === 'pumping') {
      console.log('Saving this data to server !!!');
      console.log(data);
    } else if (type === 'finished') {
      console.log('This task is finished !!');
      this.status = MAP_JOB_STATE.WAITING;
    }
  }

  addJob(job: TaskModel) {
    job.taskId = this.currentTaskId;
    this.listTask.push(job);
    this.currentTaskId++;

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

  findById(taskId: number): TaskModel {
    for (const task of this.listTask) {
      if (taskId === task.taskId) {
        return task;
      }
    }
    return null;
  }
}
