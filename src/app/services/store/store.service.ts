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

  clearData() {
    this.loginUser = null;
    this.machine = null;
  }
}
