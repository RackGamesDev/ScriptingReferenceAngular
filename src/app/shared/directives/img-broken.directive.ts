import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' //Atributo que se le asigna a la etiqueta html para usar la directiva (en este caso solo para img)
})
export class ImgBrokenDirective {
  @Input() respaldo: string = '';
  @HostListener('error') handleError(): void { //Escucha el evento de error de recursos, hay muchos mas eventos
    this.elemento.nativeElement.src = this.respaldo; //Editando el elemento (hay que tener cuidado con no crear un bucle de errores)
    console.warn("Error, la imagen no carga " + this.elemento); //Todas las funciones aqui son para el cliente
  }

  constructor(private elemento: ElementRef) { } //Hace referencia al elemento en si

}
