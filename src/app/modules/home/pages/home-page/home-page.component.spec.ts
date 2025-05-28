import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { AutentificacionService } from '@shared/services/autentificacion/autentificacion.service';
import { ClientePeticionesService } from '@shared/services/cliente-peticiones/cliente-peticiones.service';
import { CookieService } from 'ngx-cookie-service';
import { SegnalesService } from '@shared/services/Segnales/segnales.service';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: ActivatedRoute, useValue: {} },
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: AutentificacionService, useValue: {} },
        { provide: ClientePeticionesService, useValue: {} },
        { provide: CookieService, useValue: {} },
        { provide: SegnalesService, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
