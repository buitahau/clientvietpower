import {Component, OnInit} from '@angular/core';
import {DispenseTaskService} from '../../services/dispensetask/dispensetask.service';
import {DispenseTaskModel, MachineFormulaProductBaseLogModel} from '../../models/dispense.task.model';
import {MachineService} from '../../services/machine/machine.service';

@Component({
  selector: 'app-backgroundtask',
  templateUrl: './backgroundtask.component.html',
  styleUrls: ['./backgroundtask.component.scss']
})
export class BackgroundTaskComponent implements OnInit {

  listBackgroundTask: MachineFormulaProductBaseLogModel [] | any;

  constructor(private machineService: MachineService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.machineService.findAllDispenseTask().subscribe((datas: MachineFormulaProductBaseLogModel []) => {
      this.listBackgroundTask = datas;
      console.log(this.listBackgroundTask);
    });
  }

  viewCurrentTask(taskId: number) {
    this.machineService.findDispenseTaskById(taskId).subscribe((datas) => {
      console.log(datas);
    });
  }
}
