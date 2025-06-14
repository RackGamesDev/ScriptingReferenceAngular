import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientePeticionesService } from '../cliente-peticiones/cliente-peticiones.service';

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

  public procesarFormulario(body: any): void {
    //Intermediario para validar datos a enviar
    
    this.clientePeticionesService.mandarDatos(body).subscribe({ //Actuando una vez se envien los datos
      next: (response) => {
        console.log("Datos enviados correctamente:", response);
      },
      error: (error) => {
        console.error("Error al enviar los datos:", error);
      },
      complete: () => {
        console.log("Proceso de envio de datos completado.");
      }
    });
  }

  callback:EventEmitter<any> = new EventEmitter<any>(); //Creando un evento en el servicio al que se pueden suscribir componentes y pueden enviar datos (hace de intermediario)

  textos:Observable<string[]> = of([]); //Un observable es una variable que emite valores, para leerla hay que suscribirse
  numerosAleatorios:Observable<number[]> = new Observable<number[]>((observer) => { //Similar al anterior pero se emiten con una funcion asincronamente
    setInterval(() => {
      observer.next([Math.random(), Math.random(), Math.random()]);//Emitiendo un array para ser escuchado pos los suscriptores, puede tardar un tiempo
      if (Math.random() > 0.7) observer.complete(); //Cerrando finalmente, indicando que ya no se emitira nada mas 
      if (Math.random() > 0.9) observer.error("Error de emision"); //Emitiendo un error, que se puede capturar en el suscriptor
    }, 2000);
  }).pipe(map(e => {return e.reverse()})); //Usando pipes de rxjs para transformar el dato emitido una vez emitido

  behaviors():void {
    const subject:BehaviorSubject<string> = new BehaviorSubject<string>(''); //Es un observable y un observeer a la vez
    subject.subscribe((value) => { //Recibiendo datos
      console.log("Valor emitido: " + value);
    });
    subject.next('Nuevo valor'); //Emitiendo un dato
  }


  constructor(private clientePeticionesService:ClientePeticionesService) { 
    this.textos = of(['texto1', 'texto2', 'texto3']); //El servicio se encarga de alimentar a la variable
  }
}
