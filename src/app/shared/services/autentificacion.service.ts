import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  //Funciones y variables para ser usadas en el servicio, en este caso este se encarga de la autentificaicion de usuarios
  public texto: string = "texto ejemplo";
  public comprobarCredenciales(usuario: string, contrasena: string): boolean {
    //El codigo que haga falta para eso
    return (usuario === 'admin' && contrasena === '1234');
  }

  //Los servicios almacenan datos tambien
  private static numero: number = 0;
  public static incrementarNumero(): void {
    this.numero++;
  }
  public static getNumero(): number {
    return this.numero;
  }

  callback:EventEmitter<any> = new EventEmitter<any>(); //Creando un evento en el servicio al que se pueden suscribir componentes y pueden enviar datos (hace de intermediario)

  constructor() { }
}
