import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {ColorantDTO} from '../../../models/colorant.model';
import {ColorantService} from '../../../services/colorant/colorant.service';

@Component({
  selector: 'app-colorant',
  templateUrl: './colorant.component.html',
  styleUrls: ['./colorant.component.scss']
})

export class ColorantComponent implements OnInit {
  code: string = null;
  name: string = null;

  sortedData: ColorantDTO[];

  constructor(private colorantService: ColorantService) {

  }

  ngOnInit() {
    this.filter(this.code, this.name);
  }

  filter(code: string, name: string) {
    this.colorantService.getListItems().subscribe((data: any) => {
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
