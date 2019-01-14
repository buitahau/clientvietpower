import {MachineModel} from './user.model';

export class CustomerModel {
  private _customerId: number;
  private _name: string;
  private _phone: string;
  private _email: string;
  private _address: string;
  private _note: string;
  private _machine: MachineModel;

  get customerId(): number {
    return this._customerId;
  }

  set customerId(value: number) {
    this._customerId = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }

  get machine(): MachineModel {
    return this._machine;
  }

  set machine(value: MachineModel) {
    this._machine = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
