import {Injectable} from '@angular/core';
import {JobStatusModel} from '../../models/job.status.model';

@Injectable({
  providedIn: 'root'
})
export class JobStatusService {
  listJob: JobStatusModel[];

  constructor() {
    this.listJob = [];
  }

  getCurrentJob() {
    return this.listJob;
  }

  addJob(job: JobStatusModel) {
    this.listJob.push(job);
  }

  removeJob(job: JobStatusModel) {
    for (let i = 0; i < this.listJob.length; i++) {
      const currentJob: JobStatusModel = this.listJob[i];
      if (currentJob.jobStatusId === job.jobStatusId) {
        this.listJob.splice(i, 1);
        break;
      }
    }

    // this.listJob.remove(job);
  }
}
