import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {FormulaModel} from '../../models/formula';
import {FormulaColourantModel, FormulaProductBaseModel} from '../../models/formula_product_base';
import {StoreService} from '../store/store.service';
import {ProductBaseModel} from '../../models/product_base';
import {CustomerSelectedModel} from '../../models/customer';

@Injectable({
  providedIn: 'root'
})

export class FormulaService {
  listFormula: FormulaModel[] = [];
  listFormulaProductBase: FormulaProductBaseModel[] = [];

  constructor(private http: HttpService, private storeService: StoreService) {
    this.fetchData();
  }

  fetchData() {
    this.getALl();
    this.getAllFormulaProductBase();
  }

  getAllFormulaProductBase() {
    return this.http.get(environment.settings.serverendpoint + 'formula_product_base/getAll').pipe(
      map((data: Array<any>) => {
        const listFormulaProductBase = [];
        if (data) {
          for (const fpb of data) {
            listFormulaProductBase.push(ConvertModelUtils.convertFormulaProductBaseModel(fpb));
          }
        }

        this.listFormulaProductBase = listFormulaProductBase;
        return listFormulaProductBase;
      }),
      catchError(e => {
        return [];
      })
    );
  }

  getALl() {
    return this.http.get(environment.settings.serverendpoint + 'formula/getAll').pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data) {
          for (const formula of data) {
            result.push(ConvertModelUtils.convertToFormulaModel(formula));
          }
        }
        this.listFormula = result;
        return result;
      }),
      catchError(e => {
        return [];
      })
    );
  }


  findAllByCustomer() {
    const machine = this.storeService.getMachineData();
    return this.http.get(environment.settings.serverendpoint + 'formula-customer/getAll/' + machine.machineId).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data) {
          for (const formula of data) {
            result.push(ConvertModelUtils.convertToFormulaCustomerModel(formula));
          }
        }
        return result;
      }),
      catchError(e => {
        return [];
      })
    );
  }

  // postData() {
  //   const dt = {
  //     username: "Haukute",
  //     password: "123456"
  //   };
  //   debugger;
  //   this.http.post(environment.settings.serverendpoint + 'login', dt).pipe(
  //     map(datas => {
  //       console.log(datas);
  //     }),
  //   ).subscribe();
  // }
  //
  // postData1() {
  //   const dt = {
  //     username: "Haukute",
  //     password: "123456"
  //   };
  //   debugger;
  //   this.http.post(environment.settings.serverendpoint + 'login_test', dt).pipe(
  //     map(datas => {
  //       console.log(datas);
  //     }),
  //   ).subscribe();
  // }

  findById(formulaId: number) {
    const result = this.listFormula.filter(filterById);
    return result != null && result.length > 0 ? Object.assign({}, result[0]) : null;

    function filterById(item, index, array) {
      return (item.formulaId === formulaId);
    }
  }

  getListColorantOfFormula(formulaId: number) {
    return this.http.get(environment.settings.serverendpoint + 'formula/getColourants/' + formulaId).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToFormulaColourantModel(item));
          }
        }
        return result;
      }), catchError(e => {
        return [];
      })
    );
  }

  getListProductBaseCan(productBaseId: number) {
    return this.http.get(environment.settings.serverendpoint + 'product_base_can/findById/' + productBaseId).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToProductBaseCanModel(item));
          }
        }
        return result;
      }),
      catchError(e => {
        return [];
      })
    );
  }

  findFormulaProductBaseById(formulaProductBaseId: number) {
    return this.http.get(environment.settings.serverendpoint + 'formula_product_base/findById/' + formulaProductBaseId).pipe(
      map((data: any) => {
        return ConvertModelUtils.convertToFormulaProductBaseModel(data);
      })
    );
  }

  saveOrUpdateFormulaData(formulaProductBaseId: number, formula: FormulaModel, productBase: ProductBaseModel,
                          listColourants: FormulaColourantModel[], listCustomerSelected: CustomerSelectedModel[]) {
    const savingItem = ConvertModelUtils.convertToSavingFormulaProductBaseDBItem(formulaProductBaseId, formula, productBase,
      this.storeService.getMachineData(), listColourants, listCustomerSelected);

    return this.http.post(environment.settings.serverendpoint + 'machine_formula/saveOrUpdate', savingItem).pipe(
      map((data: any) => {
        console.log(data);

        return data;
      })
    );
  }
}
