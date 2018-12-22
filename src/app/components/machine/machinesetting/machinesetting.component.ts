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
  minQuantity: number;
  maxQuantity: number;
  machine: MachineModel;
  listMachineColourant: MachineColourantModel[];
  selectedMachineColourant: MachineColourantModel = null;

  constructor(
    private machineService: MachineService,
    private colourantService: ColourantService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.machine = this.machineService.getCurrentMachine();
    this.minQuantity = 400;
    this.maxQuantity = 2000;
    this.machineService.fetchDataFromServer().subscribe((datas) => {
      this.listMachineColourant = datas;

      if (this.listMachineColourant == null || this.listMachineColourant.length === 0) {
        this.colourantService.getListItems().subscribe((listColourant: any) => {
          this.listMachineColourant = [];

          for (const colourant of listColourant) {
            const colourantMachine = new MachineColourantModel();
            colourantMachine.colourant = colourant;
            colourantMachine.machine = this.machine;
            colourantMachine.quantity = getRandomBetweenTwoNumber(0, 2000);
            this.listMachineColourant.push(colourantMachine);
          }

          console.log(this.listMachineColourant);
        });
      }
    });

    function getRandomBetweenTwoNumber(begin, end) {
      return begin + Math.ceil(Math.random() * (end - begin));
    }
  }

  selectMachineColourant(colourantId: number) {
    const listFilter = this.listMachineColourant.filter((item: MachineColourantModel) => {
        return item.colourant.colourantId === colourantId;
    });

    this.selectedMachineColourant = listFilter.length > 0 ? listFilter[0] : null;
  }


}
