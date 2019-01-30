import {Injectable} from '@angular/core';
import {MachineModel, UserModel} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }

  loginUser: UserModel = null;
  machine: MachineModel = null;

  updateLoginUserData(loginUser: UserModel) {
    this.loginUser = loginUser;
    console.log(loginUser);
  }

  updateMachineData(machine: MachineModel) {
    this.machine = machine;
  }

  getLoginUserData(): UserModel {
    return this.loginUser;
  }

  getMachineData(): MachineModel {
    return this.machine;
  }
}
