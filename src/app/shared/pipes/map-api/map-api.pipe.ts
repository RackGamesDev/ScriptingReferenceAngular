import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapApi'
})
export class MapApiPipe implements PipeTransform {
  //Pipe pensado para arreglar el objeto de la api conectada
  transform(value: { fact: any }, ...args: unknown[]): any {
    return value.fact || value;
  }

}
