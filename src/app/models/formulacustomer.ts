import {MachineModel} from './user.model';
import {FormulaModel} from './formula';
import {CustomerModel} from './customer';

export class FormulaCustomerModel {
  private _formulaCustomerId: number;
  private _formula: FormulaModel;
  private _customer: CustomerModel;

  get formulaCustomerId(): number {
    return this._formulaCustomerId;
  }

  set formulaCustomerId(value: number) {
    this._formulaCustomerId = value;
  }

  get formula(): FormulaModel {
    return this._formula;
  }

  set formula(value: FormulaModel) {
    this._formula = value;
  }

  get customer(): CustomerModel {
    return this._customer;
  }

  set customer(value: CustomerModel) {
    this._customer = value;
  }
}
