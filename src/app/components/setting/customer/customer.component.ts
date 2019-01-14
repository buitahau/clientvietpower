import {Component, OnInit} from '@angular/core';
import {CustomerModel} from '../../../models/customer';
import {CustomerService} from '../../../services/customer/customer.service';
import {ModalService} from '../../../services/boostrap/modal.service';
import {ResponseMessageModel} from '../../../models/user.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  sortedData: CustomerModel[];
  dbItems: CustomerModel[];
  dbItem: CustomerModel;
  selectedCustomerId: number;

  responseMessage: ResponseMessageModel = null;
  mapErrors: any;

  constructor(private customerService: CustomerService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.responseMessage = null;
    this.dbItem = null;
    this.selectedCustomerId = null;

    this.fetchData();
  }

  fetchData(): void {
    this.customerService.findAll().subscribe((data: any[]) => {
      this.dbItems = data;
      this.sortedData = this.dbItems;
    });
  }

  addCustomer(): void {
    this.dbItem = new CustomerModel();

    setTimeout(() => {
      this.openModal('view-detail-customer');
    }, 100);
  }

  viewCustomer(customer: CustomerModel): void {
    this.dbItem = customer;

    setTimeout(() => {
      this.openModal('view-detail-customer');
    }, 100);
  }

  validateDataBeforeSubmit() {
    let hasError = false;
    const mapErrors = {};

    if (this.dbItem.name == null || this.dbItem.name.trim() === '') {
      hasError = true;
      mapErrors['name'] = 'Please enter the customer name!';
    }

    if (this.dbItem.phone == null || this.dbItem.phone.trim() === '') {
      hasError = true;
      mapErrors['phone'] = 'Please enter the customer phone number!';
    }

    if (this.dbItem.address == null || this.dbItem.address.trim() === '') {
      hasError = true;
      mapErrors['address'] = 'Please enter the customer address!';
    }

    if (this.dbItem.email == null || this.dbItem.email.trim() === '') {
      hasError = true;
      mapErrors['email'] = 'Please enter the customer email!';
    }

    return {
      hasError: hasError, mapErrors: mapErrors
    };
  }

  updateOrSavingCustomer(): void {
    const errorData = this.validateDataBeforeSubmit();
    if (!errorData.hasError) {
      this.customerService.saveOrUpdate(this.dbItem).subscribe((data: any) => {
        this.dbItem = data;
        this.closeModal('view-detail-customer');
        this.dbItem = null;
        this.fetchData();
      });
    } else {
      this.mapErrors = errorData.mapErrors;
    }
  }

  confirmDeleteCustomer(customer: CustomerModel): void {
    this.selectedCustomerId = customer.customerId;

    setTimeout(() => {
      this.openModal('confirm-remove-customer-model');
    }, 100);
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.selectedCustomerId).subscribe((data: any) => {
      this.responseMessage = data;
      this.selectedCustomerId = null;
      this.closeModal('confirm-remove-customer-model');
      this.fetchData();
    });
  }


  clearResponseMessage(): void {
    this.responseMessage = null;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
