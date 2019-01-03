import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {CollectionService} from '../../../services/collection/collection.service';
import {CollectionModel} from '../../../models/collection';
import {ModalService} from '../../../services/boostrap/modal.service';
import {MachineService} from '../../../services/machine/machine.service';
import {MachineModel} from '../../../models/user.model';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  machine: MachineModel = null;
  dbItem: CollectionModel = null;
  collectionCode: string = null;
  collectionName: string = null;

  listItems: Array<any>;
  sortedData: CollectionModel[] = null;

  constructor(private collectionService: CollectionService, private modalService: ModalService) {

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

  addCollection(): void {
    this.dbItem = new CollectionModel();

    setTimeout(() => {
      this.openModal('view-detail-collection');
    }, 100);
  }

  updateOrSavingCollection(): void {
    this.collectionService.updateOrSavingCollection(this.dbItem).subscribe((datas: any) => {
      this.dbItem = datas;
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
