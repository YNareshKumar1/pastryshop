import { TestBed } from '@angular/core/testing';

import { NareshService } from './naresh.service';

describe('NareshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NareshService = TestBed.get(NareshService);
    expect(service).toBeTruthy();
  });
});
