import { TestBed } from '@angular/core/testing';

import { BrideService } from './bride.service';

describe('BrideService', () => {
  let service: BrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
