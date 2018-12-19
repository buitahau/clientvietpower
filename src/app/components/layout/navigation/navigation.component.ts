import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {Router} from '@angular/router';

import {USER_ROLE} from '../../../models/constant';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  USER_ROLE = USER_ROLE;
  currentUser: UserModel | null;
  currentMode = '';

  userMode = 'user';
  settingMode = 'setting';
  devMode = 'dev';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getLoginUser();

    if (this.currentUser == null) {
      this.router.navigate([`../login`]);
    }
  }

  updateCurrentMode(selectMode: string | null) {
    if (this.currentMode === selectMode) {
      this.currentMode = '';
    } else {
      this.currentMode = selectMode;
    }
  }

  logOut() {
    this.userService.logOut();
  }
}
