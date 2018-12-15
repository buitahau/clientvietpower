import {Component, Input, OnInit} from '@angular/core';
import {JobStatusService} from '../../../services/jobstatus/jobstatus.service';
import {TaskModel} from '../../../models/job.status.model';

@Component({
  selector: 'app-viewdispensetask',
  templateUrl: './viewdispensetask.component.html',
  styleUrls: ['./viewdispensetask.component.scss']
})
export class ViewDispenseTaskComponent implements OnInit {
  @Input() taskId: number;
  currentTask: TaskModel | null;
  currentBgrTask: TaskModel | null;

  constructor(private jobStatusService: JobStatusService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    if (this.taskId != null && this.taskId > 0) {
      this.currentTask = this.jobStatusService.findById(this.taskId);

      console.log(this.currentTask);
    }
  }

}
