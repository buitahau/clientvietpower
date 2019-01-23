import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {CollectionService} from '../../../services/collection/collection.service';
import {CollectionModel} from '../../../models/collection';
import {ModalService} from '../../../services/boostrap/modal.service';
import {MachineService} from '../../../services/machine/machine.service';
import {MachineModel, ResponseMessageModel} from '../../../models/user.model';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  machine: MachineModel = null;
  collectionId: number = null;
  dbItem: CollectionModel = null;
  collectionCode: string = null;
  collectionName: string = null;

  listItems: Array<any>;
  sortedData: CollectionModel[] = null;
  responseMessage: ResponseMessageModel = null;
  errorValidation: any;

  constructor(private collectionService: CollectionService, private modalService: ModalService) {

  }

  ngOnInit() {
    this.fetchData();
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();

    if (! sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'collectionName': return compare(a.collectionName, b.collectionName, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'createdDate': return compare(a.createdDate, b.createdDate, isAsc);
        case 'createBy': return compare(a.createBy == null ? 0 : 1, b.createBy == null ? 0 : 1, isAsc);
        default: return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  fetchData() {
    this.collectionService.getListItems().subscribe((data: any) => {
      this.listItems = data;
      this.sortedData = this.listItems;
    });
  }

  addCollection(): void {
    this.dbItem = new CollectionModel();

    setTimeout(() => {
      this.openModal('view-detail-collection');
    }, 100);
  }

  viewCollection(collectionId: number): void {
    this.collectionService.findById(collectionId).subscribe((data: any) => {
      this.dbItem = data;
      setTimeout(() => {
        this.openModal('view-detail-collection');
      }, 100);
    });
  }

  confirmDeleteCollection(collectionId) {
    this.collectionId = collectionId;

    setTimeout(() => {
      this.openModal('confirm-remove-collection-model');
    }, 100);
  }

  deleteCollection(collectionId: number): void {
    this.collectionService.deleteCollection(collectionId).subscribe((data: any) => {
      this.responseMessage = data;
      this.collectionId = null;
      this.closeModal('confirm-remove-collection-model');
      this.fetchData();
    });
  }

  updateOrSavingCollection(): void {
    const errorData = this.validateDataBeforeSubmit();

    if (!errorData.hasError) {
      this.collectionService.updateOrSavingCollection(this.dbItem).subscribe((data: any) => {
        this.dbItem = data;
        this.closeModal('view-detail-collection');
        this.dbItem = null;
        this.fetchData();
      });
    } else {
      this.errorValidation = errorData.mapErrors;
    }
  }

  validateDataBeforeSubmit() {
    let hasError = false;
    const mapErrors = {};

    if (this.dbItem.collectionName == null || this.dbItem.collectionName.trim() === '') {
      hasError = true;
      mapErrors['collectionName'] = 'Please enter the collection name!';
    }

    return {
      hasError: hasError, mapErrors: mapErrors
    };
  }

  clearResponseMessage(): void {
    this.responseMessage = null;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
