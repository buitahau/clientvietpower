import { Component } from '@angular/core';
import {GlobalVariable} from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(private globalVariable: GlobalVariable) {
    this.globalVariable.getEndpoint();
  }
}
