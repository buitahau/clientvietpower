import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';
import {GlobalVariable} from '../../../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userName: string = null;
  password: string = null;

  constructor(private userService: UserService, private router: Router,
              private globalVarialble: GlobalVariable) {
  }

  // @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
  // @ViewChild(MatFormField) _matFormField: MatFormField;

  ngOnInit() {
    debugger;
    const url = this.globalVarialble.getBaseApiUrl();
    this.userService.clearData();
  }

  login() {
    this.userService.clearData();
    this.userService.login(this.userName, this.password);
  }
}
