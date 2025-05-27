import { TestBed } from '@angular/core/testing';

import { AutentificacionService } from './autentificacion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AutentificacionService', () => {
  let service: AutentificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutentificacionService]
    });
    service = TestBed.inject(AutentificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
