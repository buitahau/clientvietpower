import {MachineModel} from './user.model';

export class CompanyModel {
  private _companyId: number;
  private _name: string;
  private _phone: string;
  private _website: string;
  private _email: string;
  private _address: string;
  private _city: string;

  get companyId(): number {
    return this._companyId;
  }

  set companyId(value: number) {
    this._companyId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
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

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
}
