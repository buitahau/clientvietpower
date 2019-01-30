import { Component, OnInit } from '@angular/core';
import {CompanyModel} from '../../models/company.model';
import {CollectionService} from '../../services/collection/collection.service';
import {StoreService} from '../../services/store/store.service';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  dbItem: CompanyModel;
  errorValidation: any;

  constructor(private router: Router, private storeService: StoreService, private userService: UserService) { }

  ngOnInit() {
    this.dbItem = this.storeService.getLoginUserData().company;
  }

  updateCompanyInfo() {
    this.errorValidation = {};
    const errorData = this.validateDataBeforeSubmit();

    if (!errorData.hasError) {
      this.userService.updateCompanyInfo(this.dbItem).subscribe((data: any) => {
        this.storeService.getLoginUserData().company = data;
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.errorValidation = errorData.mapErrors;
    }
  }

  validateDataBeforeSubmit() {
    let hasError = false;
    const mapErrors = {};

    if (this.dbItem.name == null || this.dbItem.name.trim() === '') {
      hasError = true;
      mapErrors['name'] = 'Please enter the Company Name!';
    }

    if (this.dbItem.phone == null || this.dbItem.phone.trim() === '') {
      hasError = true;
      mapErrors['phone'] = 'Please enter the Phone Number';
    }

    if (this.dbItem.website == null || this.dbItem.website.trim() === '') {
      hasError = true;
      mapErrors['website'] = 'Please enter the website!';
    }

    if (this.dbItem.email == null || this.dbItem.email.trim() === '') {
      hasError = true;
      mapErrors['email'] = 'Please enter the email';
    }

    return {
      hasError: hasError, mapErrors: mapErrors
    };
  }

}
