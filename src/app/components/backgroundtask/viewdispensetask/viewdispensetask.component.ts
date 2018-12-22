import {Component, Input, OnInit} from '@angular/core';
import {JobStatusService} from '../../../services/jobstatus/jobstatus.service';
import {MAP_TASK_STATE, TaskModel} from '../../../models/job.status.model';

@Component({
  selector: 'app-viewdispensetask',
  templateUrl: './viewdispensetask.component.html',
  styleUrls: ['./viewdispensetask.component.scss']
})
export class ViewDispenseTaskComponent implements OnInit {
  @Input() taskId: number;
  currentTask: TaskModel | any;
  currentBgrTask: TaskModel | null;

  constructor(private jobStatusService: JobStatusService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    if (this.taskId != null && this.taskId > 0) {
      this.jobStatusService.subcribleTask(this.taskId, this).subscribe((result) => {
        this.currentTask = result;
        this.updateDataForCurrentTask();
      });
    }
  }

  public triggerUpdateTask(taskData) {
    this.currentTask = taskData;
    this.updateDataForCurrentTask();
  }

  updateDataForCurrentTask() {
    if (this.currentTask != null) {
      for (const task of this.currentTask.childrenTask) {
        if (task.state === MAP_TASK_STATE.IN_PROGRESS) {
          this.currentBgrTask = task;
        }
      }
    }
  }
}
