import {ColorantModel} from './colorant';
import {FormulaProductBaseModel, ProductBaseCanModel} from './formula_product_base';
import {MachineModel, UserModel} from './user.model';
import {TaskInterface} from '../utils/convert-models-utils';

export const MAP_DISPENSE_TASK_STATE = {
  WAITING: 'WAITING',
  IN_PROGRESS: 'START',
  DONE: 'DONE',
};

export const MAP_DISPENSE_TASK_STEP_TYPE = {
  PREPARE: 'prepare',
  PUMPING: 'pumping',
  FINISHED: 'finished'
};

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


export class DispenseTaskStepModel implements TaskInterface {
  private _taskId: number;
  private _type: string;
  private _status: string;
  private _process: number;
  private _totalProcess: number;
  private _callBackFunction;

  // custom data
  private _startTime: Date;
  private _endTime: Date;
  private _parentTask: DispenseTaskModel | null;
  private _taskData: DispenseStepDataModel | null;


  constructor(type: string, taskData: DispenseStepDataModel | null, callBackFunction) {
    this._type = type;
    this._taskData = taskData;
    this._callBackFunction = callBackFunction;
    this._status = MAP_DISPENSE_TASK_STATE.WAITING;
    this._totalProcess = 2000;
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


  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
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

  get callBackFunction() {
    return this._callBackFunction;
  }

  set callBackFunction(value) {
    this._callBackFunction = value;
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

  get parentTask(): DispenseTaskModel | null {
    return this._parentTask;
  }

  set parentTask(value: DispenseTaskModel | null) {
    this._parentTask = value;
  }

  get taskData(): DispenseStepDataModel | null {
    return this._taskData;
  }

  set taskData(value: DispenseStepDataModel | null) {
    this._taskData = value;
  }
}

export class DispenseTaskModel implements TaskInterface {
  private _taskId: number;
  private _type: string;
  private _status: string;
  private _process: number;
  private _totalProcess: number;
  private _callBackFunction;

  // custom data
  private _startTime: Date;
  private _endTime: Date;

  private _taskData: DispenseDataModel |  null;
  private _childrenTask: DispenseTaskStepModel [] | null;

  constructor(type: string, childrenTask: DispenseTaskStepModel[] | null, taskData: DispenseDataModel | null, callBackFunction) {
    this._type = type;
    this._childrenTask = childrenTask;
    this._taskData = taskData;
    this._callBackFunction = callBackFunction;
    this._status = MAP_DISPENSE_TASK_STATE.WAITING;
    this._totalProcess = 2000;
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

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
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

  get callBackFunction() {
    return this._callBackFunction;
  }

  set callBackFunction(value) {
    this._callBackFunction = value;
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

  get taskData(): DispenseDataModel | null {
    return this._taskData;
  }

  set taskData(value: DispenseDataModel | null) {
    this._taskData = value;
  }

  get childrenTask(): DispenseTaskStepModel[] | null {
    return this._childrenTask;
  }

  set childrenTask(value: DispenseTaskStepModel [] | null) {
    this._childrenTask = value;
  }
}

export class MachineFormulaProductBaseLogModel {
  private _machineFormulaProductBaseId: number;
  private _machine: MachineModel;
  private _formulaProductBase: FormulaProductBaseModel;
  private _user: UserModel;
  private _canSize: number;
  private _createdDate: Date;
  private _finishedDate: Date;
  private _status: string;

  get machineFormulaProductBaseId(): number {
    return this._machineFormulaProductBaseId;
  }

  set machineFormulaProductBaseId(value: number) {
    this._machineFormulaProductBaseId = value;
  }

  get machine(): MachineModel {
    return this._machine;
  }

  set machine(value: MachineModel) {
    this._machine = value;
  }

  get formulaProductBase(): FormulaProductBaseModel {
    return this._formulaProductBase;
  }

  set formulaProductBase(value: FormulaProductBaseModel) {
    this._formulaProductBase = value;
  }

  get user(): UserModel {
    return this._user;
  }

  set user(value: UserModel) {
    this._user = value;
  }

  get canSize(): number {
    return this._canSize;
  }

  set canSize(value: number) {
    this._canSize = value;
  }

  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get finishedDate(): Date {
    return this._finishedDate;
  }

  set finishedDate(value: Date) {
    this._finishedDate = value;
  }
}
