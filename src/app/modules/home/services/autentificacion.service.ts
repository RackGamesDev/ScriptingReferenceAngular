import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  //Funciones y variables para ser usadas en el servicio, en este caso este se encarga de la autentificaicion de usuarios
  public texto:string = "texto ejemplo";
  public comprobarCredenciales(usuario: string, contrasena: string): boolean {
    //El codigo que haga falta para eso
    return (usuario === 'admin' && contrasena === '1234');
  }

  constructor() { }
}
