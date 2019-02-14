import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import {FormulaColourantModel} from './models/formula_product_base';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private ipc: IpcRenderer;
  constructor() {
    if ((<any>window).require) {
    try {
      this.ipc = (<any>window).require('electron').ipcRenderer;
    } catch (error) {
      throw error;
    }
    } else {
      console.warn('Could not load electron ipc');
    }
  }

  saveFile() {
    // return new Promise<string[]>((resolve, reject) => {
    //   this.ipc.once("getFilesResponse", (event, arg) => {
    //     resolve(arg);
    //   });
    //   this.ipc.send("getFiles");
    // });
    this.ipc.send('saveFile', {data: 'test'});
  }

  async getFiles() {
    return new Promise<string[]>((resolve, reject) => {
      this.ipc.once("getFilesResponse", (event, arg) => {
        resolve(arg);
      });
      this.ipc.send('readFile');
    });
  }

  saveDispenseTask(baseCode: string, baseOnCan: number, canSize: number, formulaColourants: FormulaColourantModel[]) {
    const dispenseTaskData = {
      baseCode: baseCode,
      canSize: canSize,
      formulaColourants: this.convertFormulaColourantData(formulaColourants, baseOnCan, canSize)
    };

    this.ipc.send('saveFile', dispenseTaskData);
  }


  convertFormulaColourantData(formulaColourants: FormulaColourantModel[], baseOnCan, canSize) {
    const result = [];
    for (const fcData of formulaColourants) {
      result.push({colourantCode: fcData.colourant.colourantCode, quantity: fcData.quantity / baseOnCan * canSize});
    }
    return result;
  }
}
