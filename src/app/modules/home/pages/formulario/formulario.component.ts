import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formulario: FormGroup = new FormGroup({});

  constructor() {}
  ngOnInit():void {
    this.formulario = new FormGroup({ //Generando las normas para el formulario
      texto: new FormControl(''), //Cada campo
      numero: new FormControl(''),
      siono: new FormControl('')
    });
      
  }
}
