import { Component, OnInit } from '@angular/core';
import {JobStatusService} from '../../services/jobstatus/jobstatus.service';
import {JobStatusModel} from '../../models/job.status.model';

@Component({
  selector: 'app-backgroundtask',
  templateUrl: './backgroundtask.component.html',
  styleUrls: ['./backgroundtask.component.scss']
})
export class BackgroundTaskComponent implements OnInit {

  listBackgroundTask: JobStatusModel [];
  constructor(private jobStatusService: JobStatusService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.listBackgroundTask = this.jobStatusService.getListJob();
  }

}
