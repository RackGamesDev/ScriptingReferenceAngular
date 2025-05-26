import { TestBed } from '@angular/core/testing';

import { ClientePeticionesService } from './cliente-peticiones.service';

describe('ClientePeticionesService', () => {
  let service: ClientePeticionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientePeticionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
