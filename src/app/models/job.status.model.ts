import {ColorantModel} from './colorant';
import {JobStatusService} from '../services/jobstatus/jobstatus.service';
import {FormulaProductBaseModel, ProductBaseCanModel} from './formula_product_base';
import {OnInit} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';

export class DispenseDataModel {
  private _formulaProductBase: FormulaProductBaseModel;
  private _productBaseCan: ProductBaseCanModel;
  private _canSize: number;
  private _numberOfCan: number;

  constructor(formulaProductBase: FormulaProductBaseModel, productBaseCan: ProductBaseCanModel, canSize: number, numberOfCan: number) {
    this._formulaProductBase = formulaProductBase;
    this._productBaseCan = productBaseCan;
    this._canSize = canSize;
    this._numberOfCan = numberOfCan;
  }

  get formulaProductBase(): FormulaProductBaseModel {
    return this._formulaProductBase;
  }

  set formulaProductBase(value: FormulaProductBaseModel) {
    this._formulaProductBase = value;
  }

  get productBaseCan(): ProductBaseCanModel {
    return this._productBaseCan;
  }

  set productBaseCan(value: ProductBaseCanModel) {
    this._productBaseCan = value;
  }

  get canSize(): number {
    return this._canSize;
  }

  set canSize(value: number) {
    this._canSize = value;
  }

  get numberOfCan(): number {
    return this._numberOfCan;
  }

  set numberOfCan(value: number) {
    this._numberOfCan = value;
  }
}

export class DispenseStepDataModel {
  private _colorant: ColorantModel;
  private _quantity: number;

  constructor(colorant: ColorantModel, quantity: number) {
    this._colorant = colorant;
    this._quantity = quantity;
  }

  get colorant(): ColorantModel {
    return this._colorant;
  }

  set colorant(value: ColorantModel) {
    this._colorant = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}


export interface TaskInterface {
  taskId: number;
  type: string;
  state: string;
  process: number;
  totalProcess: number;
  childrenTask: TaskModel[] | null;
  parentTask: TaskModel | null;
  callBackFunction;

  run(jobServices: JobStatusService): void;

  notify(type: string, data: any);
}

export const MAP_TASK_STATE = {
  SLEEP: 'SLEEP',
  IN_PROGRESS: 'IN-PROGRESS',
  FINISHED: 'FINISHED'
};

export class TaskModel implements TaskInterface, OnInit {
  private _taskId: number;
  private _type: string;
  private _state: string;
  private _process: number;
  private _totalProcess: number;
  private _childrenTask: TaskModel[] | null;
  private _parentTask: TaskModel | null;
  private _callBackFunction;

  private jobStatusService: JobStatusService;

  // custom data
  private _taskData: DispenseDataModel | DispenseStepDataModel | null;
  private _startTime: Date;
  private _endTime: Date;
  private _cd: ChangeDetectorRef;

  constructor(cd: ChangeDetectorRef) {
    this._cd = cd;
  }

  ngOnInit(): void {

  }

  updateState(type: string, listTask: TaskModel[], taskData: DispenseDataModel | DispenseStepDataModel | null, callBackFunction) {
    this._type = type;
    this._state = MAP_TASK_STATE.SLEEP;
    this._process = 0;
    this._totalProcess = 0;

    this._childrenTask = listTask;

    this._taskData = taskData;
    this._callBackFunction = callBackFunction;

    if (this._type === 'pumping' && this._taskData != null && this._taskData instanceof DispenseStepDataModel) {
      this._totalProcess = this._taskData.quantity / 2 * 1000; // 1 s thi bom duoc 2 ml son tinh chat
    } else if (this._type === 'prepare') {
      this._totalProcess = 2000; // prepare by 2000ms
    } else if (this._type === 'finished') {
      this._totalProcess = 2000;
    } else {
      this._totalProcess = 0;
    }

    if (listTask != null) {
      let index = 0;
      for (const childTask of listTask) {
        childTask._taskId = index;
        childTask._parentTask = this;
        this._totalProcess += childTask._totalProcess;
        index++;
      }
    } else {
      this._totalProcess = this._totalProcess;
    }

    this._cd.detectChanges();
  }

  run(jobStatusService: JobStatusService): void {
    this.jobStatusService = jobStatusService;
    this._state = MAP_TASK_STATE.IN_PROGRESS;
    this._startTime = new Date();

    if (this._type === 'Dispense') {
      this.jobStatusService.record('Dispense', this._taskData);
    }

    if (this._childrenTask != null && this._childrenTask.length > 0) {
      this._childrenTask[0].run(jobStatusService);
    } else {   // fake event should be call after task done.
      const waitTime = this.totalProcess;
      setTimeout(() => {
        this.notify('done', this._taskData);
      }, waitTime);
    }
  }

  notify(type: string, taskData: any) {
    this._cd.detectChanges();

    if (type === 'done') {
      // update data for pumping
      if ('pumping' === this._type && this._taskData != null && this._taskData instanceof DispenseStepDataModel) {
        this.jobStatusService.record('pumping', this._taskData);
        this._taskData.quantity = 0;
      }

      // update data for prepare

      if (this._callBackFunction != null && this._callBackFunction !== undefined) {
        this._callBackFunction();
      }

      this._state = MAP_TASK_STATE.FINISHED;
      if (this._parentTask != null) {
        this._parentTask.notify('next-step', this);
      }

      if (this._callBackFunction != null && this._callBackFunction !== undefined) {
        this._callBackFunction();
      }

    } else if (type === 'next-step' && taskData != null && taskData instanceof TaskModel) {
      this.goToNextStep(taskData);
    }
  }

  goToNextStep(taskData) {
    this._process += taskData != null ? taskData.totalProcess : this._totalProcess;

    if (this._childrenTask != null && this._childrenTask.length > 0 && taskData._taskId + 1 < this._childrenTask.length) {
      const nextStep = this._childrenTask[taskData._taskId + 1];
      nextStep.run(this.jobStatusService);
    } else {
      this._state = MAP_TASK_STATE.FINISHED;
      this.jobStatusService.record('finished', this._taskId);
    }
  }

  get taskId(): number {
    return this._taskId;
  }

  set taskId(value: number) {
    this._taskId = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get process(): number {
    return this._process;
  }

  set process(value: number) {
    this._process = value;
  }

  get totalProcess(): number {
    return this._totalProcess;
  }

  set totalProcess(value: number) {
    this._totalProcess = value;
  }

  get taskData(): DispenseDataModel | DispenseStepDataModel | null {
    return this._taskData;
  }

  set taskData(value: DispenseDataModel | DispenseStepDataModel | null) {
    this._taskData = value;
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date {
    return this._endTime;
  }

  set endTime(value: Date) {
    this._endTime = value;
  }

  get childrenTask(): TaskModel[] | null {
    return this._childrenTask;
  }

  set childrenTask(value: TaskModel[] | null) {
    this._childrenTask = value;
  }

  get parentTask(): TaskModel | null {
    return this._parentTask;
  }

  set parentTask(value: TaskModel | null) {
    this._parentTask = value;
  }

  get callBackFunction(): void | null {
    return this._callBackFunction;
  }

  set callBackFunction(value: void | null) {
    this._callBackFunction = value;
  }
}
