import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {MachineColourantModel, MachineModel, UserModel} from '../../models/user.model';
import {UserService} from '../user/user.service';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {catchError, map} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {ColorantModel} from '../../models/colorant';
import {FormulaColourantModel, FormulaProductBaseModel} from '../../models/formula_product_base';
import {MAP_DISPENSE_TASK_STATE} from '../dispensetask/dispensetask.service';
import {Observable} from 'rxjs';
import {FormulaModel} from '../../models/formula';

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

  // validateDispenseTaskBeforeProcess(listFormulaColourant: FormulaColourantModel[] | null, numberCan: number) {
  //   return this.http.get(environment.settings.serverendpoint + 'machine/getColourants/' + this.machine.machineId).pipe(
  //     map((data: Array<any>) => {
  //       const currentListColourantMachine = [];
  //       if (data && data.length > 0) {
  //         for (const item of data) {
  //           currentListColourantMachine.push(ConvertModelUtils.convertToMachineColourant(item));
  //         }
  //       }
  //
  //       return currentListColourantMachine;
  //
  //       let enoughColorDataToDispenseOneCan = true;
  //       let enoughColorDataToDispenseAction = true;
  //
  //       for (const _item of listFormulaColourant) {
  //         const validColorForOneCan = currentListColourantMachine.filter((_cmitem) => {
  //           return _cmitem.colorant.colourantId === _item.colourant.colourantId && _item.quantity > _cmitem.quantity;
  //         });
  //
  //         if (validColorForOneCan.length === 0) {
  //           enoughColorDataToDispenseOneCan = false;
  //           enoughColorDataToDispenseAction = false;
  //         }
  //
  //         if (enoughColorDataToDispenseOneCan) {
  //           const validColorForAction = currentListColourantMachine.filter((_cmitem) => {
  //             return _cmitem.colorant.colourantId === _item.colourant.colourantId && _item.quantity > _cmitem.quantity * numberCan;
  //           });
  //
  //           if (validColorForAction.length === 0) {
  //             enoughColorDataToDispenseAction = false;
  //           }
  //         }
  //       }
  //
  //       if (enoughColorDataToDispenseOneCan) {
  //         return {
  //           success: true,
  //           errorMessage: ''
  //         };
  //       } else {
  //         return {
  //           success: false,
  //           errorMessage: `Don't have enough colourant to dispense formula !!!!`
  //         };
  //       }
  //     }), catchError(e => {
  //       return {
  //         success: false,
  //         errorMessage: `Cannot load data from serve !!!!`
  //       };
  //     })
  //   );
  // }

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

  /**
   * Validate số lượng colourant của machine có còn đủ để pha màu với cansize này hay không
   * listFormulaColorant: là default colourant khi chọn formula, chưa nhân cansize
   * canSize: số lít
   */
  validateQuantityColourant(canSize: number, listFormulaColorant: FormulaColourantModel[], formular: FormulaModel) {
    const machineId = this.machine.machineId;
    const baseOnCan = formular.baseOnCan ? formular.baseOnCan : 1; // nếu undefined thì default là 1;
    return this.http.get(environment.settings.serverendpoint + 'machine/getColourants/' + machineId).pipe(
      map((mColours: Array<any>) => {
        // list colourant hiện có của machine
        const res = []; // kết quả trả về, danh sách màu không đủ
        const mapExistColours = {}; // tạo map colour với key là colourcode, value là số lượng còn lại
        mColours.map(c => {
          mapExistColours[c.colourant.colourantCode] = c.quantity;
        });
        listFormulaColorant.map(lf => {
          const colourCode = lf.colourant.colourantCode;
          // số lượng mong đợi: lấy số ml cần có, chia cho baseOnCan của formula và nhân cho số lit cansize
          const expectQuantity = (lf.quantity / baseOnCan) * canSize;
          // nếu trong máy không còn màu này, hoặc còn nhưng nhỏ hơn số lượng mong đợi
          if (!mapExistColours[colourCode] || mapExistColours[colourCode] < expectQuantity) {
            res.push(colourCode);
          }
        });
        return res;
      })
    );
  }
}
