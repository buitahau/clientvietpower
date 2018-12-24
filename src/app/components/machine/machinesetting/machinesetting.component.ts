import {Component, OnInit} from '@angular/core';
import {MachineService} from '../../../services/machine/machine.service';
import {MachineColourantModel, MachineModel} from '../../../models/user.model';
import {ColourantService} from '../../../services/colorant/colorant.service';
import {ModalService} from '../../../services/boostrap/modal.service';

@Component({
  selector: 'app-machinesetting',
  templateUrl: './machinesetting.component.html',
  styleUrls: ['./machinesetting.component.scss']
})

export class MachineSettingComponent implements OnInit {
  minQuantity: number;
  maxQuantity: number;
  machine: MachineModel;
  listMachineColourant: MachineColourantModel[];

  selectedMachineColourant: MachineColourantModel = null;
  currentAmount: number;
  updateAmount: number;
  addedAmount: number;
  // addedAmountPercent: number;

  constructor(
    private modalService: ModalService,
    private machineService: MachineService,
    private colourantService: ColourantService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.machine = this.machineService.getCurrentMachine();
    this.minQuantity = this.machine.minQuantity;
    this.maxQuantity = this.machine.maxQuantity;

    this.machineService.fetchDataFromServer().subscribe((datas) => {
      this.processListColourantData(datas);
    });
  }

  processListColourantData(datas: any) {
    this.listMachineColourant = datas;
    this.selectedMachineColourant = null;
    this.addedAmount = 0;
    this.currentAmount = 0;
    // this.addedAmountPercent = 0;
  }

  selectMachineColourant(colourantId: number) {
    const listFilter = this.listMachineColourant.filter((item: MachineColourantModel) => {
      return item.colourant.colourantId === colourantId;
    });

    this.selectedMachineColourant = listFilter.length > 0 ? listFilter[0] : null;
    this.currentAmount = this.selectedMachineColourant != null ? this.selectedMachineColourant.quantity : 0;
    this.addedAmount = 0;
    // this.addedAmountPercent = 0;
    this.updateAmount = this.currentAmount + this.addedAmount;

    setTimeout(() => {
      this.openModal('view-selected-colourant-machine-modal');
    }, 0);
  }

  updateAddedAmount(type: string) {
    if (type === 'amount') {
      this.updateAmount = this.currentAmount + this.addedAmount;

      if (this.updateAmount > this.maxQuantity) {
        this.updateAmount = this.maxQuantity;
        this.addedAmount = this.maxQuantity - this.updateAmount;
      } else if (this.updateAmount < 0) {
        this.updateAmount = 0;
        this.addedAmount = this.updateAmount - this.currentAmount;
      }
      // this.addedAmountPercent = (this.addedAmount / this.maxQuantity) * 100;
    } else if (type === 'percent') {
      // this.addedAmount = (this.addedAmountPercent - (this.currentAmount / this.maxQuantity)) * this.maxQuantity;
    }
  }

  updateAmountBySlider() {
    this.addedAmount = this.updateAmount - this.currentAmount;
  }

  fillByPercent(percent: number) {
    const remainPercent = percent - (this.currentAmount / this.maxQuantity) * 100;
    this.addedAmount = remainPercent / 100 * this.maxQuantity;
    this.updateAmount = this.currentAmount + this.addedAmount;
  }

  updateAndSaving(id: string) {
    this.machineService.updateColourantMachineData(this.machine, this.selectedMachineColourant.colourant, this.addedAmount)
      .subscribe((datas) => {
        this.processListColourantData(datas);
        this.modalService.close(id);
      });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
