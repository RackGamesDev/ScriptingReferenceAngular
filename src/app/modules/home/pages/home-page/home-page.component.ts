import { Component, OnInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { LowerCasePipe, NgClass, NgForOf, NgIf, NgTemplateOutlet, UpperCasePipe, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BotonComponent } from "../../../../shared/components/boton/boton.component";
import { CancionModel } from '@core/models/cancion.model';
import { Router } from '@angular/router';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { AutentificacionService } from '@shared/services/autentificacion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  //Importando funciones para el componente
  imports: [NgForOf, RouterOutlet, BotonComponent, NgIf, NgTemplateOutlet, NgClass, RouterModule, UpperCasePipe, LowerCasePipe, OrderListPipe, ImgBrokenDirective],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  //Inyeccion de dependencias al componente
  constructor(private router: Router, private autentificacionService: AutentificacionService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('ejecutando en el navegador');
    }
    if (isPlatformServer(this.platformId)) {
      console.log('ejecutando en el servidor');
    }
  }

  //Las variables que se exporten aqui podran ser usadas por el html y demas partes del componente
  public items = [1, 2, 3, 4, 5];
  public textos = ['aa', 'bb', 'cc', 'dd', 'ee'];
  public variableTardia!: string;
  public canciones: { data: Array<CancionModel> } = require('src/app/data/canciones.json'); //Importando un json en base al modelo

  ngOnInit(): void { //Cuando se inicialice el componente
    console.log("componente inicializado");
    this.variableTardia = "aaa"; //Inicializando la variable

    AutentificacionService.incrementarNumero(); //Llamando a una funcion de un servicio
    console.log(AutentificacionService.getNumero());

    const observador: Subscription = this.autentificacionService.callback.subscribe((response: string) => { //Subscibiendose a un evento en un servicio, la funcion se ejecutara cada vez que se emita desde cualquier lado
      console.log("Se emitio al evento con " + response);
    });
    this.autentificacionService.callback.emit("hola"); //Emitiendo al evento, por lo que se ejecutaran las funciones donde se haya suscrito a este
    observador.unsubscribe(); //Desuscribiendose del evento, para que no se ejecute mas (se suele hace en ngOnDestroy para que no se quede consumiendo)
    const observadorTextos: Subscription = this.autentificacionService.textos.subscribe((response: string[]) => { //Suscribiendose a un observable, una variable que emite informacion
      console.log("es " + response);
    });
    observadorTextos.unsubscribe();

    const suscripcionesFuncion = async () => { //En algunos casos ciertas suscripciones deben ser asincronas
      const observadorNumeros: Subscription = this.autentificacionService.numerosAleatorios.subscribe({next:(response: number[]) => { //Suscribiendose a un observable con funcion
        response.forEach((numero: number) => console.log(numero));
      }, complete: () => {console.log("fin de emisiones")}, error: (e: any) => {console.warn(e)}}); //Ademas, estableciendo eventos cuando deje de emitir finalmente o cuando de error
      
      observadorNumeros.unsubscribe();
    }
    //suscripcionesFuncion();
  }
  ngOnDestroy(): void { //Cuando se destruya el componente (cuando se navega a otra ruta o se elimina)
    console.log("componente destruido");
  } //Tambien estan ngOnChanges, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked



  funcion(event: Event): void { //Esta funcion se puede llamar desde el html
    console.log("funcion llamada " + event); //Event tiene informaicon del evento que llamo desde el html
    this.router.navigate(['/lista'], { queryParams: { variable: 'hola', numero: 4 } }); //Redirecciona a la ruta de login usando el router del constructor (/lista?variable=hola&numero=4)
  }
}
