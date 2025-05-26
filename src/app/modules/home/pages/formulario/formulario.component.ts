import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AutentificacionService } from '@shared/services/autentificacion/autentificacion.service';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, JsonPipe, RouterModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formulario: FormGroup = new FormGroup({});

  constructor(private router:Router, private autentificacionService:AutentificacionService) {}
  
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
      this.autentificacionService.procesarFormulario(body); //Guardar los datos en el servicio de autentificacion
      this.router.navigate(['/lista'], {queryParams: body}); //En este caso se envian los datos al servicio para ser procesados (se podrian enviar mediante http desde aqui o desde el servicio)
    } else {
      alert('Formulario no valido');
    }
  }
}
