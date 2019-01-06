import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {FormulaColourantModel} from '../../../models/formula_product_base';

@Component({
  selector: 'app-table-colourants',
  templateUrl: './table-colourants.component.html',
  styleUrls: ['./table-colourants.component.scss']
})

export class TableColourantsComponent implements OnInit, OnChanges {
  @Input() baseOnCan: number;
  @Input() canSize: number;
  @Input() listFormulaColorant: FormulaColourantModel[];
  @Input() maxColorQuantity: number;

  private _baseOnCan: number;
  private _canSize: number;
  private _listFormulaColorant: FormulaColourantModel[];
  private _maxColorQuantity: number;

  constructor() {
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    const baseOnCanChange: SimpleChange = changes.baseOnCan;
    if (baseOnCanChange != null) {
      this._baseOnCan = baseOnCanChange.currentValue;
    }

    const canSizeChange: SimpleChange = changes.canSize;
    if (canSizeChange != null) {
      this._canSize = canSizeChange.currentValue;
    }

    const listFormulaColorantChange: SimpleChange = changes.listFormulaColorant;
    if (listFormulaColorantChange != null) {
      this._listFormulaColorant = listFormulaColorantChange.currentValue;
    }
    const maxColorQuantityChange: SimpleChange = changes.maxColorQuantity;
    if (maxColorQuantityChange != null) {
      this._maxColorQuantity = maxColorQuantityChange.currentValue;
    }
  }

  roundNumber(num: number) {
    return Math.round(num * 100) / 100;
  }
}
