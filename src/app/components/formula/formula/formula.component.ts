import { Component, OnInit } from '@angular/core';
import {FormulaProductBaseModel} from '../../../models/formula_product_base';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit {
  dbItem: FormulaProductBaseModel = null;
  constructor() { }

  ngOnInit() {
  }

  selectFormula(selectedFormula) {
    this.dbItem = selectedFormula;
  }

  clearSelectedFormula() {
    this.dbItem = null;
  }
}
