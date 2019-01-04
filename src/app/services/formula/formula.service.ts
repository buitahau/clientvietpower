import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {FormulaModel} from '../../models/formula';
import {FormulaProductBaseModel} from '../../models/formula_product_base';

@Injectable({
  providedIn: 'root'
})

export class FormulaService {
  listFormula: FormulaModel[] = [];
  listFormulaProductBase: FormulaProductBaseModel[] = [];

  constructor(private http: HttpService) {
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
            listFormulaProductBase.push(ConvertModelUtils.convertFormulaProductBaseObject(fpb));
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
            result.push(ConvertModelUtils.convertToFormulaObject(formula));
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

  postData() {
    const dt = {
      username: "Haukute",
      password: "123456"
    };
    debugger;
    this.http.post(environment.settings.serverendpoint + 'login', dt).pipe(
      map(datas => {
        console.log(datas);
      }),
    ).subscribe();
  }

  postData1() {
    const dt = {
      username: "Haukute",
      password: "123456"
    };
    debugger;
    this.http.post(environment.settings.serverendpoint + 'login_test', dt).pipe(
      map(datas => {
        console.log(datas);
      }),
    ).subscribe();
  }

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
            result.push(ConvertModelUtils.convertToFormulaColourantObject(item));
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
        console.log(data);

        const result = [];
        if (data) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToProductBaseCanObject(item));
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
        return ConvertModelUtils.convertToFormulaProductBaseObject(data);
      })
    );
  }
}
