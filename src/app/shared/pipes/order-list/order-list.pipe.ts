import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList' //Nombre de la pipe en el html (se llama con {{ dato | pipe }})
})
export class OrderListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown { //Funcion para transformar el dato
    console.log(args?.[0] || ''); //Posibles argumentos que se le pasen
    if (Array.isArray(value)) return value.sort(); //Como es un pipe preparado para arrays, comprueba si el dato es array y lo ordena
    else return value; //Siempre se tiene que devolver algo para poder concatenarlo con mas pipes
  }

}
