import { Component, OnInit } from '@angular/core';
import {JobStatusService} from '../../services/jobstatus/jobstatus.service';
import {TaskModel} from '../../models/job.status.model';

@Component({
  selector: 'app-backgroundtask',
  templateUrl: './backgroundtask.component.html',
  styleUrls: ['./backgroundtask.component.scss']
})
export class BackgroundTaskComponent implements OnInit {

  listBackgroundTask: TaskModel [];
  constructor(private jobStatusService: JobStatusService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.listBackgroundTask = this.jobStatusService.getListJob();
  }

  viewCurrentTask(jobId: number) {
    console.log( this.jobStatusService.subcribleTask(jobId, this));
  }

}
