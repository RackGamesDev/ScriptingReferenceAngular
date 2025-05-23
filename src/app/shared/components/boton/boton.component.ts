import { Component, Input, OnInit } from '@angular/core';

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
  @Input() public texto:string = '';
}
