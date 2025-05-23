import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspecificaComponent } from './lista-especifica.component';

describe('ListaEspecificaComponent', () => {
  let component: ListaEspecificaComponent;
  let fixture: ComponentFixture<ListaEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEspecificaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
