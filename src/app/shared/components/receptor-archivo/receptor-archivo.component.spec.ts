import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptorArchivoComponent } from './receptor-archivo.component';

describe('ReceptorArchivoComponent', () => {
  let component: ReceptorArchivoComponent;
  let fixture: ComponentFixture<ReceptorArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptorArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptorArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
