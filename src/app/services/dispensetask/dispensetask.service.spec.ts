import { TestBed } from '@angular/core/testing';

import { DispenseTaskService } from './dispensetask.service';

describe('DispenseTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispenseTaskService = TestBed.get(DispenseTaskService);
    expect(service).toBeTruthy();
  });
});
