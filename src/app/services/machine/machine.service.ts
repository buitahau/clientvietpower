import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {MachineColourantModel, MachineModel} from '../../models/user.model';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {catchError, map} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {ColorantModel} from '../../models/colorant';
import {FormulaColourantModel, FormulaProductBaseModel} from '../../models/formula_product_base';
import {FormulaModel} from '../../models/formula';
import {StoreService} from '../store/store.service';
import {GlobalVariable} from '../../global';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  machine: MachineModel = null;
  listMachineColourants: MachineColourantModel[];

  constructor(private http: HttpService, private storeService: StoreService, private globalVariable: GlobalVariable, private router: Router) {
    this.fetchData();
  }

  fetchData() {
    this.machine = this.storeService.getMachineData();

    if (this.machine != null) {
      this.fetchDataFromServer().subscribe((data: any) => {
        this.listMachineColourants = data;
      });
    }
  }

  fetchDataFromServer() {
   this.getCurrentMachine();

    return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine/getColourants/' + this.machine.machineId).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data && data.length > 0) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToMachineColourantModel(item));
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
    if (this.machine == null) {
      this.machine = this.storeService.getMachineData();
    }
    return this.machine;
  }

  updateColourantMachineData(colourant: ColorantModel, addedAmount: number, refillFactor: number) {
    const machine = this.getCurrentMachine();

    const dt = {
      machine: {machineId: machine.machineId},
      colourant: {colourantId: colourant.colourantId},
      quantity: addedAmount,
      refillFactor: refillFactor
    };

    return this.http.post(this.globalVariable.getBaseApiUrl() + 'machine_colour/update', dt).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data && data.length > 0) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToMachineColourantModel(item));
          }
        }
        return result;
      }), catchError(e => {
        return [];
      })
    );
  }

  subtractionColourantMachine(colorant: ColorantModel, quantity: number, taskId: number) {
    const machine = this.getCurrentMachine();

    const dt = {
      machine: {machineId: machine.machineId},
      colourant: {colourantId: colorant.colourantId},
      quantity: quantity,
      machineFormulaProductBaseId: taskId
    };
    this.http.post(this.globalVariable.getBaseApiUrl() + 'machine_colour/subtraction', dt).pipe().subscribe();
  }

  recordDispenseFormulaProductBase(status: string, taskId, formulaProductBase: FormulaProductBaseModel, quantity: number) {
    const machine = this.storeService.getMachineData();
    const user = this.storeService.getLoginUserData();

    const dt = {
      machineFormulaProductBaseId: taskId,
      formulaProductBase: {formulaProductBaseId: formulaProductBase.formulaProductBaseId},
      user: {userId: user.userId},
      machine: {machineId: machine.machineId},
      quantity: quantity,
      status: status
    };

    return this.http.post(this.globalVariable.getBaseApiUrl() + 'machine_formula/record', dt);
  }

  findAllDispenseTask() {
    this.getCurrentMachine();

    return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine_formula/findAll/' + this.machine.machineId).pipe(
      map((data: Array<any>) => {
        const listDispenseTaskLog = [];
        if (data) {
          for (const item of data) {
            listDispenseTaskLog.push(ConvertModelUtils.convertToDispenseFormulaProductBaseModel(item));
          }
        }
        return listDispenseTaskLog;
      }), catchError(e => {
        return [];
      })
    );
  }

  findDispenseTaskById(taskId: number) {
    return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine_formula/findById/' + taskId).pipe(
      map((data: any) => {
        return ConvertModelUtils.convertToFormulaProductBaseModel(data);
      })
    );
  }

  /**
   * Validate số lượng colourant của machine có còn đủ để pha màu với cansize này hay không
   * listFormulaColorant: là default colourant khi chọn formula, chưa nhân cansize
   * canSize: số lít
   */
  validateQuantityColourant(canSize: number, listFormulaColorant: FormulaColourantModel[], formula: FormulaModel) {
    this.getCurrentMachine();

    const machineId = this.machine.machineId;
    const baseOnCan = formula.baseOnCan ? formula.baseOnCan : 1; // nếu undefined thì default là 1;

    return this.http.get(this.globalVariable.getBaseApiUrl() + 'machine/getColourants/' + machineId).pipe(
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
          const expectQuantity = ((lf.quantity / baseOnCan) * canSize).toFixed(2);
          // nếu trong máy không còn màu này, hoặc còn nhưng nhỏ hơn số lượng mong đợi
          if (!mapExistColours[colourCode] || (+mapExistColours[colourCode] - +expectQuantity < this.machine.minQuantity)) {
            res.push(colourCode);
          }
        });
        return res;
      })
    );
  }

  updateSettingMachine(minQuantity: number, warningQuantity: number) {
    this.getCurrentMachine();

    const dt = {
      machineId: this.machine.machineId,
      minQuantity: minQuantity,
      warningQuantity: warningQuantity,
    };

    return this.http.post(this.globalVariable.getBaseApiUrl() + 'machine/update', dt).pipe(
      map((data: any) => {
        return ConvertModelUtils.convertToMachineModel(data);
      })
    );
  }

  updateMachineLocal(machine: MachineModel) {
    this.machine = machine;
    this.storeService.updateMachineData(this.machine);
  }

  clearData() {
    this.machine = null;
    this.listMachineColourants = null;
  }
}
