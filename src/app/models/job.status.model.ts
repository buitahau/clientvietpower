export interface TaskInterface {
  start(): void;
  stop(): void;
  update(): void;
  pause(): void;
  cancel(): void;
}

export class JobStepModal implements TaskInterface {
  cancel(): void {
  }

  pause(): void {
  }

  start(): void {
  }

  stop(): void {
  }

  update(): void {
  }
}

export class JobStatusModel implements TaskInterface {
 private _jobStatusId: number;
 private _type: string;
 private _process: number;
 private _status: string;
 private _listTask: any[];
 private _startTime: Date;
 private _stopTime: Date;

  constructor(type, listTask: any[]) {
    this._type = type;
    this._listTask = listTask;
    this._process = 0;
    this._status = 'NOT-START';
  }

  start(): void {
    this._status = 'IN-PROGRESS';
    this._startTime = new Date();
  }

  stop(): void {
    this._status = 'DONE';
    this._stopTime = new Date();
  }

  update(): void {
  }

  pause(): void {
    this._status = 'PAUSE';
  }

  cancel(): void {
    this._status = 'PAUSE';
  }

  get jobStatusId(): number {
    return this._jobStatusId;
  }

  set jobStatusId(value: number) {
    this._jobStatusId = value;
  }

  get process(): number {
    return this._process;
  }

  set process(value: number) {
    this._process = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get listTask(): any[] {
    return this._listTask;
  }

  set listTask(value: any[]) {
    this._listTask = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get stopTime(): Date {
    return this._stopTime;
  }

  set stopTime(value: Date) {
    this._stopTime = value;
  }
}
