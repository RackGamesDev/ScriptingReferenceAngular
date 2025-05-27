import { TestBed } from '@angular/core/testing';

import { ClientePeticionesService } from './cliente-peticiones.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ClientePeticionesService', () => {
  let service: ClientePeticionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClientTesting(), ClientePeticionesService]});
    service = TestBed.inject(ClientePeticionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
