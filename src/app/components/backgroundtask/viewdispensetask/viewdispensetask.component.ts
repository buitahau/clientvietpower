import {Component, Input, OnInit} from '@angular/core';
import {DispenseTaskService} from '../../../services/dispensetask/dispensetask.service';
import {DispenseTaskModel, DispenseTaskStepModel, MAP_TASK_STATE} from '../../../models/dispense.task.model';

@Component({
  selector: 'app-viewdispensetask',
  templateUrl: './viewdispensetask.component.html',
  styleUrls: ['./viewdispensetask.component.scss']
})
export class ViewDispenseTaskComponent implements OnInit {
  @Input() taskId: number;
  currentTask: DispenseTaskModel | any;
  currentStepTask: DispenseTaskStepModel | null;

  constructor(private dispenseTaskService: DispenseTaskService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    if (this.taskId != null && this.taskId > 0) {
      this.dispenseTaskService.findDispenseTaskById(this.taskId).subscribe((result) => {
        this.currentTask = result;
        this.updateDataForCurrentTask();
      });
    }
  }

  updateDataForCurrentTask() {
    if (this.currentTask != null) {
      for (const task of this.currentTask.childrenTask) {
        if (task.status === MAP_TASK_STATE.IN_PROGRESS) {
          this.currentStepTask = task;
        }
      }
    }
  }
}
