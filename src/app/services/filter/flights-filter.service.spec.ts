import { TestBed } from '@angular/core/testing';

import { FlightsFilterService } from './flights-filter.service';

describe('FlightsFilterService', () => {
  let service: FlightsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
