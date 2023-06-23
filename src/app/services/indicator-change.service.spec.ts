import { TestBed } from '@angular/core/testing';

import { IndicatorChangeService } from './indicator-change.service';

describe('IndicatorChangeService', () => {
  let service: IndicatorChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicatorChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
