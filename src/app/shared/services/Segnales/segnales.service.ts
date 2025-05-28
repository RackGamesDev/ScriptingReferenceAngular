import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SegnalesService {

  constructor() {
    console.log("-------------o-------");
    const contador = signal(0); //Crea una segnal con un valor inicial (no se puede declarar ni fuera ni dentro de uan funcion, solo en el constructor o funciones para dependencias)
    console.log(contador()); //Devuelve el valor de la segnal
    const multiplicar = computed(() => contador() * 2); //Guardando una funcion que siempre devuelve el doble de la segnal (mejor rendimiento que una funcion normal)
    effect(() => { //Esta funcion se ejecuta cada vez que cambia el valor de cualquier segnal leida dentro (posiblemente no funcione hasta que pase un tiempo ya que es asincrono)
      console.log("el valor ha cambiado" + contador() + " y el doble es " + multiplicar());
      //En algunas versiones esta .peek() en vez de (), si se uda peek no contara como que se esta usando la funcion aqui dentro
    });
    contador.update((e) => e + 1); //Actualiza el valor de una segnal, usando una funcion
    contador.set(5); //Establece un valor a la segnal
    console.log(multiplicar()); //En este caso daria 10 porque devuelve el doble de la segnal, que era 5
    const segnalObjeto = signal({texto: "aa", numero: 1});
    segnalObjeto.apply((e: { texto: string; }) => ({ texto: e.texto + "bb" })); //Igual a update pero con objetos (ahora seria {texto: "aabb", numero: 1})
    //En algunas versiones se usa .mutate() para modificar el objeto entero
    console.log("-------------o-------");
    //bind call
   }
}
