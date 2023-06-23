import { TestBed } from '@angular/core/testing';

import { DifficulyCheckService } from './difficuly-check.service';

describe('DifficulyCheckService', () => {
  let service: DifficulyCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifficulyCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
