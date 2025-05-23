import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from "../../../../shared/components/boton/boton.component";
import { CancionModel } from '@core/models/cancion.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgForOf, RouterOutlet, BotonComponent, NgIf, NgTemplateOutlet, NgClass], //Importando funciones para el componente
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    //Las variables que se exporten aqui podran ser usadas por el html y demas partes del componentes
    public items = [1,2,3,4,5];
    public textos = ['aa', 'bb', 'cc', 'dd', 'ee'];
    public variableTardia!: string;
    public canciones: { data: Array<CancionModel> } = require('src/app/data/canciones.json'); //Importando un json en base al modelo
    constructor() {}

    ngOnInit(): void {
      console.log("componente inicializado");
      this.variableTardia = "aaa";
    }
}
