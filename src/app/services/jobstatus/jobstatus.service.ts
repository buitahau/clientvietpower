import {Injectable} from '@angular/core';
import {JobStatusModel} from '../../models/job.status.model';

@Injectable({
  providedIn: 'root'
})
export class JobStatusService {
  listJob: JobStatusModel[];
  currentTaskId: number = 1;

  constructor() {
    this.listJob = [];
  }

  getListJob() {
    return this.listJob;
  }

  getCurrentJob() {
    return this.listJob;
  }

  addJob(job: JobStatusModel) {
    job.jobStatusId = this.currentTaskId;
    this.listJob.push(job);
    this.currentTaskId++;

    console.log(this.listJob);
  }

  removeJob(job: JobStatusModel) {
    for (let i = 0; i < this.listJob.length; i++) {
      const currentJob: JobStatusModel = this.listJob[i];
      if (currentJob.jobStatusId === job.jobStatusId) {
        this.listJob.splice(i, 1);
        break;
      }
    }
  }
}
