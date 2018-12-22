import {Component, OnInit} from '@angular/core';
import {MachineService} from '../../../services/machine/machine.service';
import {MachineColourantModel, MachineModel} from '../../../models/user.model';
import {ColourantService} from '../../../services/colorant/colorant.service';

@Component({
  selector: 'app-machinesetting',
  templateUrl: './machinesetting.component.html',
  styleUrls: ['./machinesetting.component.scss']
})

export class MachineSettingComponent implements OnInit {
  minQuantity: 400;
  maxQuantity: 2000;
  machine: MachineModel;
  listMachineColourant: MachineColourantModel[];

  constructor(
    private machineService: MachineService,
    private colourantService: ColourantService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.machine = this.machineService.getCurrentMachine();
    this.listMachineColourant = this.machineService.getListColorantOfMachine();

    if (this.listMachineColourant == null || this.listMachineColourant.length === 0) {
      this.colourantService.getListItems().subscribe((listColourant: any) => {
        for (const colourant of listColourant) {
          const colourantMachine = new MachineColourantModel();
          colourantMachine.colourant = colourant;
          colourantMachine.machine = this.machine;
          colourantMachine.quantity = 0;
        }
      });
    }
  }
}
