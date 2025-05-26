import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  textos:Observable<string[]> = of([]); //Un observable es una variable que emite valores, para leerla hay que suscribirse
  numerosAleatorios:Observable<number[]> = new Observable<number[]>((observer) => { //Similar al anterior pero se emiten con una funcion asincronamente
    setInterval(() => {
      observer.next([Math.random(), Math.random(), Math.random()]);//Emitiendo un array para ser escuchado pos los suscriptores, puede tardar un tiempo
      if (Math.random() > 0.7) observer.complete(); //Cerrando finalmente, indicando que ya no se emitira nada mas 
      if (Math.random() > 0.9) observer.error("Error de emision"); //Emitiendo un error, que se puede capturar en el suscriptor
    }, 2000);
  });

  constructor() { 
    this.textos = of(['texto1', 'texto2', 'texto3']); //El servicio se encarga de alimentar a la variable
  }
}
