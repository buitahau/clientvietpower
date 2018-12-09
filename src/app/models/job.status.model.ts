export class JobStatusModel {
 private _jobStatusId: number;
 private _process: number;
 private _status: string;
 private _listTask: any[];

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
}
