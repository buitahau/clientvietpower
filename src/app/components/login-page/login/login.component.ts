import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userName: string = null;
  password: string = null;

  constructor(private userService: UserService, private router: Router) {
  }

  // @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
  // @ViewChild(MatFormField) _matFormField: MatFormField;

  ngOnInit() {
    this.userService.clearData();
  }

  login() {
    this.userService.clearData();
    this.userService.login(this.userName, this.password);
  }
}
