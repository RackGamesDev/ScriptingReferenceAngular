import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompletaComponent } from './lista-completa.component';

describe('ListaCompletaComponent', () => {
  let component: ListaCompletaComponent;
  let fixture: ComponentFixture<ListaCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCompletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
