import { Component, OnInit } from '@angular/core';
import { LowerCasePipe, NgClass, NgForOf, NgIf, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BotonComponent } from "../../../../shared/components/boton/boton.component";
import { CancionModel } from '@core/models/cancion.model';
import { Router } from '@angular/router';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  //Importando funciones para el componente
  imports: [NgForOf, RouterOutlet, BotonComponent, NgIf, NgTemplateOutlet, NgClass, RouterModule, UpperCasePipe, LowerCasePipe, OrderListPipe, ImgBrokenDirective], 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    //Las variables que se exporten aqui podran ser usadas por el html y demas partes del componente
    public items = [1,2,3,4,5];
    public textos = ['aa', 'bb', 'cc', 'dd', 'ee'];
    public variableTardia!: string;
    public canciones: { data: Array<CancionModel> } = require('src/app/data/canciones.json'); //Importando un json en base al modelo

    constructor(private router:Router) {}

    ngOnInit(): void {
      console.log("componente inicializado");
      this.variableTardia = "aaa";
    }

    funcion($event: Event): void { //Esta funcion se puede llamar desde el html (el $ no hace nada)
      console.log("funcion llamada " + $event); //Event tiene informaicon del evento que llamo desde el html
      this.router.navigate(['/lista'], {queryParams: {variable: 'hola', numero: 4}}); //Redirecciona a la ruta de login usando el router del constructor (/lista?variable=hola&numero=4)
    }
}
