import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton', //Creando un selector nuevo html para renderizar el componente donde sea
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log("componente inicializado");
  }
  @Input() public texto:string = ''; //Variable que se puede pasar desde el exterior del componente como atributo en la etiqueta
  @Output() callbackDatos:EventEmitter<any> = new EventEmitter<any>(); //Callback para enviar/emitir datos hacia afuera
  recibirDatosBoton(evento:any):void{
    console.log("Desde el componente hijo" + evento);
    this.callbackDatos.emit(evento); //Emitiendo el evento hacia afuera del componente
  }
}
