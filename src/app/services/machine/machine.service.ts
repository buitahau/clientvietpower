import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/http/services/http.service';
import {MachineColourantModel, MachineModel} from '../../models/user.model';
import {UserService} from '../user/user.service';
import ConvertModelUtils from '../../utils/convert-models-utils';
import {catchError, map} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  machine: MachineModel = null;
  listMachineColourants: MachineColourantModel[];

  constructor(private http: HttpService, private userService: UserService, private router: Router,) {
    this.fetchData();
  }

  fetchData() {
    this.machine = this.userService.getLoginUser().machine;
    if (this.machine != null) {
      this.getListColorantOfMachine(this.machine.machineId);
    }
  }

  getListColorantOfMachine(machineId: number) {
    return this.http.get(environment.settings.serverendpoint + 'machine/getColourants/' + machineId).pipe(
      map((data: Array<any>) => {
        const result = [];
        if (data && data.length > 0) {
          for (const item of data) {
            result.push(ConvertModelUtils.convertToMachineColourant(item));
          }
        } else {
          this.router.navigate([`../dashboard/setting`]);
        }
        this.listMachineColourants = result;
      }), catchError(e => {
        return [];
      })
    );
  }

}
