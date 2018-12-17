import { TestBed } from '@angular/core/testing';

import { ColourantService } from './colorant.service';

describe('ColourantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColourantService = TestBed.get(ColourantService);
    expect(service).toBeTruthy();
  });
});
