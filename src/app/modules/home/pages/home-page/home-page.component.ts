import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from "../../../../shared/components/boton/boton.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgForOf, RouterOutlet, BotonComponent, NgIf, NgTemplateOutlet], //Importando funciones para el componente
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    //Las variables que se exporten aqui podrán ser usadas por el html y demás partes del componentes
    public items = [1,2,3,4,5];
    public variableTardia!: string;

    constructor() {}

    ngOnInit(): void {
      console.log("componente inicializado");
      this.variableTardia = "aaa";
    }
}
