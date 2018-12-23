import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {MachineColourantModel, MachineModel, UserModel} from '../../models/user.model';
import {UserService} from '../user/user.service';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {catchError, map} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {ColorantModel} from '../../models/colorant';
import {FormulaProductBaseModel} from '../../models/formula_product_base';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  machine: MachineModel = null;
  listMachineColourants: MachineColourantModel[];

  constructor(private http: HttpService, private userService: UserService, private router: Router) {
    this.fetchData();
  }

  fetchData() {
    this.machine = this.userService.getLoginUser().machine;

    if (this.machine != null) {
      this.fetchDataFromServer().subscribe((data: any) => {
        this.listMachineColourants = data;
      });
    }
  }

  fetchDataFromServer() {
    return this.http.get(environment.settings.serverendpoint + 'machine/getColourants/' + this.machine.machineId).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data && data.length > 0) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToMachineColourant(item));
          }
        }
        return result;
      }), catchError(e => {
        return [];
      })
    );
  }

  getListColorantOfMachine() {
    return this.listMachineColourants;
  }

  getCurrentMachine() {
    return this.machine;
  }

  updateColourantMachineData(machine: MachineModel, colourant: ColorantModel, addedAmount: number) {
    const dt = {
      machine: {machineId: machine.machineId},
      colourant: {colourantId: colourant.colourantId},
      quantity: addedAmount
    };

    return this.http.post(environment.settings.serverendpoint + 'machine_colour/update', dt).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data && data.length > 0) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToMachineColourant(item));
          }
        }
        return result;
      }), catchError(e => {
        return [];
      })
    );
  }

  subtractionColourantMachine(colorant: ColorantModel, quantity: number) {
    const machine = this.getCurrentMachine();
    const dt = {
      machine: {machineId: machine.machineId},
      colourant: {colourantId: colorant.colourantId},
      quantity: quantity
    };
    this.http.post(environment.settings.serverendpoint + 'machine_colour/subtraction', dt).pipe().subscribe();
  }

  recordDispenseFormulaProductBase(status: string, taskId, formulaProductBase: FormulaProductBaseModel, quantity: number) {
    const machine = this.getCurrentMachine();
    const user = this.userService.getLoginUser();

    const dt = {
      machineFormulaProductBaseId: taskId,
      formulaProductBase: {formulaProductBaseId: formulaProductBase.formulaProductBaseId},
      user: {userId: user.userId},
      machine: {machineId: machine.machineId},
      quantity: quantity,
      status: status
    };

    return this.http.post(environment.settings.serverendpoint + 'machine_formula/record', dt);
  }

  findAllDispenseTask() {
    return this.http.get(environment.settings.serverendpoint + 'machine_formula/findAll/' + this.machine.machineId).pipe(
      map((data: Array<any>) => {
        const listDispenseTaskLog = [];
        if (data) {
          for (const item of data) {
            listDispenseTaskLog.push(ConvertModelUtils.convertToDispenseFormulaProductBase(item));
          }
        }
        return listDispenseTaskLog;
      }), catchError(e => {
        return [];
      })
    );
  }

  findDispenseTaskById(taskId: number) {
    return this.http.get(environment.settings.serverendpoint + 'machine_formula/findById/' + taskId);
  }
}
