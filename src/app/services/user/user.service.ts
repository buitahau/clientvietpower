import {Injectable} from '@angular/core';
import {CookieService} from 'ng-cookie';
import {Router} from '@angular/router';
import {map} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';
import {HttpService} from '../../shared/http/services/http.service';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {UserModel} from '../../models/user.model';
import {MachineService} from '../machine/machine.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLogin: boolean = false;
  userDTO: UserModel = null;
  errorMessage: string;

  constructor(private http: HttpService, private router: Router, private cookieService: CookieService) {
    this.isAuthenticated();
  }

  isAuthenticated() {
    if (this.cookieService.get_cookie('username') && this.cookieService.get_cookie('password')) {
      this.login(this.cookieService.get_cookie('username'), this.cookieService.get_cookie('password'));
    }
  }

  login(userName: string, password: string) {
    const dt = {
      userName: userName,
      password: password,
    };

    this.http.post(environment.settings.serverendpoint + 'login_test', dt).pipe(
      map(datas => {
        if (datas != null) {
          this.isLogin = true;
          this.userDTO = ConvertModelUtils.convertToUserModel(datas);
          this.cookieService.set_cookie('username', userName, 1);
          this.cookieService.set_cookie('password', password, 1);
          this.router.navigate(['/dashboard']);
          this.errorMessage = null;
        } else {
          this.userDTO = null;
          this.isLogin = false;
          this.errorMessage = 'Username or Password is incorrect! Please try again';
          alert('Username or Password is incorrect! Please try again');
        }
      }),
    ).subscribe();
  }

  getLoginUser(): UserModel | null {
    return this.userDTO;
  }

  logOut() {
    this.clearData();
    this.router.navigate([`../login`]);
  }

  clearData() {
    this.userDTO = null;
    this.isLogin = false;
    this.cookieService.delete_cookie('username');
    this.cookieService.delete_cookie('token');
  }
}
