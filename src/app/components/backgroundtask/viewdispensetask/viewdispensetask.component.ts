import {Component, Input, OnInit} from '@angular/core';
import {DispenseTaskModel, DispenseTaskStepModel} from '../../../models/dispense.task.model';

@Component({
  selector: 'app-viewdispensetask',
  templateUrl: './viewdispensetask.component.html',
  styleUrls: ['./viewdispensetask.component.scss']
})
export class ViewDispenseTaskComponent implements OnInit {
  @Input() dispenseTask: DispenseTaskModel;
  @Input() dispenseStepTask: DispenseTaskStepModel;
  @Input() listColorantUsed: {colorant, quantity} [];
  @Input() maxColorQuantity: number;

  constructor() {

  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
  }
}
