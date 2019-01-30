import {ColorantModel} from './colorant';
import {CompanyModel} from './company.model';

export class MachineModel {
  private _machineId: number;
  private _code: string;
  private _name: string;
  private _minQuantity: number;
  private _maxQuantity: number;
  private _warningQuantity: number;

  get machineId(): number {
    return this._machineId;
  }

  set machineId(value: number) {
    this._machineId = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get minQuantity(): number {
    return this._minQuantity;
  }

  set minQuantity(value: number) {
    this._minQuantity = value;
  }

  get maxQuantity(): number {
    return this._maxQuantity;
  }

  set maxQuantity(value: number) {
    this._maxQuantity = value;
  }

  get warningQuantity(): number {
    return this._warningQuantity;
  }

  set warningQuantity(value: number) {
    this._warningQuantity = value;
  }
}

export class RoleModel {
  private _roleId:number;
  private _roleName: string;


  get roleId(): number {
    return this._roleId;
  }

  set roleId(value: number) {
    this._roleId = value;
  }

  get roleName(): string {
    return this._roleName;
  }

  set roleName(value: string) {
    this._roleName = value;
  }
}

export class UserModel {
  private _userId: string;
  private _userName: string;
  private _role: RoleModel;
  private _machine: MachineModel;
  private _company: CompanyModel | null;

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get role(): RoleModel {
    return this._role;
  }

  set role(value: RoleModel) {
    this._role = value;
  }

  get machine(): MachineModel {
    return this._machine;
  }

  set machine(value: MachineModel) {
    this._machine = value;
  }

  get company(): CompanyModel | null {
    return this._company;
  }

  set company(value: CompanyModel | null) {
    this._company = value;
  }
}

export class MachineColourantModel {
  private _machineColourantId: number;
  private _machine: MachineModel;
  private _colourant: ColorantModel;
  private _quantity: number;
  private _refillFactor: number;

  get machineColourantId(): number {
    return this._machineColourantId;
  }

  set machineColourantId(value: number) {
    this._machineColourantId = value;
  }

  get machine(): MachineModel {
    return this._machine;
  }

  set machine(value: MachineModel) {
    this._machine = value;
  }

  get colourant(): ColorantModel {
    return this._colourant;
  }

  set colourant(value: ColorantModel) {
    this._colourant = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get refillFactor(): number {
    return this._refillFactor;
  }

  set refillFactor(value: number) {
    this._refillFactor = value;
  }
}


export class ResponseMessageModel {
  private _type: string;
  private _message: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
