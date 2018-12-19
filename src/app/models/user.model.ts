export class MachineModel {
  private _machineId: number;
  private _code: string;
  private _name: string;


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
}
