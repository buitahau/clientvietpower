import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {UserDTO} from '../../../models/user.model';
import {Router} from '@angular/router';

import {USER_ROLE} from '../../../models/constant';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  USER_ROLE = USER_ROLE;
  currentUse: UserDTO | null;
  currentMode = '';

  userMode = 'user';
  settingMode = 'setting';
  devMode = 'dev';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.currentUse = this.userService.getLogginUse();

    if (this.currentUse == null) {
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
    this.router.navigate([`../login`]);
  }
}
