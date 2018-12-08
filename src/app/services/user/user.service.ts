import {Injectable} from '@angular/core';
import {UserDTO} from '../../models/user.model';
import {USER_ROLE} from '../../models/constant';
import {CookieService} from 'ng-cookie';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLogin: boolean = false;
  userDTO: UserDTO = null;

  constructor(private router: Router, private cookieService: CookieService) {
    this.isAuthenticated();
  }

  isAuthenticated() {
    if (this.cookieService.get_cookie('username') && this.cookieService.get_cookie('password')) {
      const loginUser = this.login(this.cookieService.get_cookie('username'), this.cookieService.get_cookie('password'));
      if (loginUser != null) {
        this.userDTO = loginUser;
      }
    }
    return this.isLogin;
  }

  login(userName: string, password: string): UserDTO {
    if (userName === 'admin' && password === '123456') {
      this.userDTO = {userName: 'admin', password: '123456', role: USER_ROLE.ADMIN};
      this.isLogin = true;
    } else if (userName === 'shop' && password === '123456') {
      this.userDTO = {userName: 'shop', password: '123456', role: USER_ROLE.SHOP};
      this.isLogin = true;

    } else if (userName === 'operator' && password === '123456') {
      this.userDTO = {userName: 'operator', password: '123456', role: USER_ROLE.OPERATOR};
      this.isLogin = true;

    } else if (userName === 'maintenance' && password === '123456') {
      this.userDTO = {userName: 'maintenance', password: '123456', role: USER_ROLE.MAINTENANCE};
      this.isLogin = true;

    } else {
      this.userDTO = null;
      this.isLogin = false;
    }

    this.cookieService.set_cookie('username', userName, 1);
    this.cookieService.set_cookie('password', password, 1);

    return this.userDTO;
  }

  getLoginUser(): UserDTO | null {
    return this.userDTO;
  }

  logOut() {
    this.userDTO = null;
    this.isLogin = false;
    this.cookieService.delete_cookie('username');
    this.cookieService.delete_cookie('token');
    this.router.navigate([`../login`]);
  }
}
