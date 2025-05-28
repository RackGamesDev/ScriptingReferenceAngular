import { TestBed } from '@angular/core/testing';

import { SegnalesService } from './segnales.service';

describe('SegnalesService', () => {
  let service: SegnalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegnalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
