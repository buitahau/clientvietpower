import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {CollectionService} from '../../../services/collection/collection.service';
import {CollectionModel} from '../../../models/collection';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collectionCode: string = null;
  collectionName: string = null;

  listItems: Array<any>;
  sortedData: CollectionModel[] = null;

  constructor(private collectionService: CollectionService) {

  }

  ngOnInit() {
    this.fetchData();
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = data;
    //   return;
    // }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'code':
          return compare(a.collectionCode, b.collectionCode, isAsc);
        case 'collectionName':
          return compare(a.collectionName, b.collectionName, isAsc);
        default:
          return 0;
      }
    });

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  fetchData() {
    this.collectionService.getListItems().subscribe((data: any) => {
      this.listItems = data;
    });
  }
}
