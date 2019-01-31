import { Component, OnInit } from '@angular/core';
import {FormulaProductBaseModel} from '../../../models/formula_product_base';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit {
  viewItem: FormulaProductBaseModel = null;
  editItem: FormulaProductBaseModel = null;
  addItem: FormulaProductBaseModel = null;
  constructor() { }

  ngOnInit() {
  }

  selectFormula(selectedFormula) {
    this.viewItem = selectedFormula;
  }

  clearSelectedFormula() {
    this.viewItem = null;
    this.editItem = null;
    this.addItem = null;
  }
}
