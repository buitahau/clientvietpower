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

  constructor(
    private http: HttpService) {
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
          for (const formula of data) {
            result.push(ConvertModelUtils.convertToFormulaObject(formula));
          }
        }
        return result;
      }),
      catchError(e => {
        return [];
      })
    );
  }

  getListProductBaseCanOfFormula(formulaId: number) {
    return this.http.get(environment.settings.serverendpoint + 'formula_product_base/findByFormula/' + formulaId).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data) {
          for (const formula of data) {
            result.push(ConvertModelUtils.convertToFormulaObject(formula));
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
    return this.http.get(environment.settings.serverendpoint + 'formula_product_base/findById/' + formulaProductBaseId);
  }
}
