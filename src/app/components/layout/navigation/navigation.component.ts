import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';

import {USER_ROLE} from '../../../models/constant';
import {UserModel} from '../../../models/user.model';
import {MachineService} from '../../../services/machine/machine.service';
import {StoreService} from '../../../services/store/store.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  USER_ROLE = USER_ROLE;
  currentUser: UserModel | null;
  currentMode = '';

  userMode = 'user';
  settingMode = 'setting';
  devMode = 'dev';
  lowColourants: boolean = false;
  warningType: string;

  constructor(private userService: UserService,
              private storeService: StoreService,
              private machineService: MachineService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getLoginUser();

    if (this.currentUser == null) {
      this.router.navigate([`../login`]);
    }

    this.checkLowColourant();
  }

  checkLowColourant() {
    const machine = this.storeService.getMachineData();
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
              this.warningType = 'warning';
            }

            if (colourantMachine.quantity < machine.minQuantity) {
              this.warningType = 'danger';
            }
          }
        }
        this.lowColourants = isLowColourant;
      });
    }
  }

  updateCurrentMode(selectMode: string | null) {
    if (this.currentMode === selectMode) {
      this.currentMode = '';
    } else {
      this.currentMode = selectMode;
    }
  }

  logOut() {
    this.userService.logOut();
  }
}
