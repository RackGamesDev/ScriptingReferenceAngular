import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, JsonPipe, RouterModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formulario: FormGroup = new FormGroup({});

  constructor(private router:Router) {}
  
  ngOnInit():void {
    this.formulario = new FormGroup({ //Generando las normas para el formulario
      texto: new FormControl('', [Validators.required, Validators.pattern('^a.*')]), //Estableciendo cada campo y sus validadores, si un validador falla le pone la clase ng-invalid, los formularios usan varias clases automaticas de angular (mirar el css)
      numero: new FormControl(''),
      direccion: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(99)]), //Hay muchos validadores, se pueden crear personalizados
      siono: new FormControl('')
    });
      
  }

  enviar():void {
    const body = this.formulario.value; //Json con los datos
    console.log(body);
    if (this.formulario.valid) {
      alert('Formulario enviado correctamente');
      //Enviar los datos a donde sea y redirigir a otro sitio
      this.router.navigate(['/lista'], {queryParams: body});
    } else {
      alert('Formulario no valido');
    }
  }
}
