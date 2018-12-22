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

  constructor(private colourantService: ColourantService) {

  }

  ngOnInit() {
    this.filter(this.code, this.name);
  }

  filter(code: string, name: string) {
    this.colourantService.getListItems().subscribe((data: any) => {
      this.sortedData = data;
    });
  }

  resetFilter() {
    this.code = null;
    this.name = null;
  }

  sortData(sort: Sort) {
    this.filter(null, null);
  }
}
