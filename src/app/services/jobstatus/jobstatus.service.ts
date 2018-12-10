import {Injectable} from '@angular/core';
import {JobStatusModel} from '../../models/job.status.model';
import {CookieService} from 'ng-cookie';

@Injectable({
  providedIn: 'root'
})
export class JobStatusService {
  listJob: JobStatusModel[];
  currentTaskId: number = 1;

  constructor(private cookieService: CookieService) {
    this.loadCurrentData();
  }

  loadCurrentData(): void {
    const savingData = this.cookieService.get_cookie('backgroundtask');
    console.log(savingData);

    if (savingData != null && savingData === undefined && savingData.trim() !== '') {
      this.listJob = JSON.parse(savingData);
    } else {
      this.listJob = [];
    }

    this.updateCookie();
  }

  updateCookie() {
    this.cookieService.set_cookie('backgroundtask', JSON.stringify(this.listJob), 2);
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

    this.updateCookie();
  }

  removeJob(job: JobStatusModel) {
    for (let i = 0; i < this.listJob.length; i++) {
      const currentJob: JobStatusModel = this.listJob[i];
      if (currentJob.jobStatusId === job.jobStatusId) {
        this.listJob.splice(i, 1);
        break;
      }
    }
    this.updateCookie();
  }

  findById(jobId: number) {
    for (const job of this.listJob) {
      if (jobId === job.jobStatusId) {
        return job;
      }
    }
    return null;
  }
}
