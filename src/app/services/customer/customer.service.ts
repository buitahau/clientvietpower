import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpService} from '../../shared/http/services/http.service';
import {StoreService} from '../store/store.service';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {CustomerModel} from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpService, private storeService: StoreService) { }

  findAll() {
    const machine = this.storeService.getMachineData();
    if (machine != null && machine.machineId > 0) {
      return this.http.get(environment.settings.serverendpoint + 'customer/findAll/' + machine.machineId).pipe(
        map((data: Array<any>) => {
          const listCustomer = [];
          if (data) {
            for (const customer of data) {
              listCustomer.push(ConvertModelUtils.convertToCustomerModel(customer));
            }
          }
          return listCustomer;
        }), catchError(e => {
          return [];
        })
      );
    }
  }

  saveOrUpdate(dbItem: CustomerModel) {
    const machine = this.storeService.getMachineData();
    const dt = ConvertModelUtils.convertToCustomerDBItem(dbItem,  machine);
    return this.http.post(environment.settings.serverendpoint + 'customer/save', dt).pipe(
      map((data: any) => {
        return ConvertModelUtils.convertToMachineModel(data);
      })
    );
  }

  deleteCustomer(customerId: number) {
    const machine = this.storeService.getMachineData();
    const dt = {
      customerId: customerId,
      machine: {machineId: machine.machineId}
    };

    return this.http.post(environment.settings.serverendpoint + 'customer/delete', dt).pipe(
      map((data: any) => {
        console.log(data);
        return ConvertModelUtils.convertToResponseMessageModel(data);
      })
    );
  }
}
