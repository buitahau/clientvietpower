import {Injectable} from '@angular/core';
import {MachineService} from '../machine/machine.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private router: Router, private machineService: MachineService) {
  }

  validateMachineData() {
    const machine = this.machineService.getCurrentMachine();
    if (machine != null) {
      this.machineService.fetchDataFromServer().subscribe((data: any) => {
        let isLowColourant = false;
        const listMachineColourants = data;
        if (listMachineColourants == null || listMachineColourants.length === 0) {
          isLowColourant = true;
        } else {
          for (const colourantMachine of listMachineColourants) {
            if (colourantMachine.quantity < machine.warningQuantity) {
              isLowColourant = true;
            }
          }
        }

        if (isLowColourant) {
          this.router.navigate(['/dashboard/machine']);
        } else {
          this.router.navigate(['/dashboard/formula']);
        }
      });
    }
  }

  validateDispenseTask(numberCan: number) {

  }
}