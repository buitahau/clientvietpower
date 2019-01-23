import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {ColourantService} from '../../../services/colorant/colorant.service';
import {ColorantModel} from '../../../models/colorant';

@Component({
  selector: 'app-colorant',
  templateUrl: './colorant.component.html',
  styleUrls: ['./colorant.component.scss']
})

export class ColorantComponent implements OnInit {
  code: string = null;
  name: string = null;

  sortedData: ColorantModel[];
  dbItems: ColorantModel[];

  constructor(private colourantService: ColourantService) {

  }

  ngOnInit() {
    this.code = null;
    this.name = null;
    this.filter();
  }

  filter() {
    this.colourantService.getListItems().subscribe((data: any) => {
      this.dbItems = data;
      this.sortedData = this.dbItems;
    });
  }

  resetFilter() {
    this.code = null;
    this.name = null;
  }

  sortData(sort: Sort) {
    if (! sort.active || sort.direction === '') {
      this.sortedData = this.dbItems;
      return;
    }

    this.sortedData = this.dbItems.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'colourantCode': return compare(a.colourantCode, b.colourantCode, isAsc);
        case 'colourantName': return compare(a.colourantName, b.colourantName, isAsc);
        case 'density': return compare(a.density, b.density, isAsc);
        case 'pricePerUnit': return compare(a.pricePerUnit, b.pricePerUnit, isAsc);
        case 'surcharge': return compare(a.surcharge, b.surcharge, isAsc);
        default: return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
