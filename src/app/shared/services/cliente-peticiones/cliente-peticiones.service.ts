import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MapApiPipe } from '@shared/pipes/map-api/map-api.pipe';

@Injectable({
  providedIn: 'root'
})
export class ClientePeticionesService {

  private readonly URL_ORIGEN = environment.apiUrlGet; //Usando un valor de environment
  private readonly URL_DESTINO = environment.apiUrlPost;

  constructor(private httpClient:HttpClient) { }

  recibirDatos(): Observable<any> {
    return this.httpClient.get(this.URL_ORIGEN) //Devolviendo un observable de la peticion, que devuelve la respuesta
    //.pipe(map((dataRaw:any) => {dataRaw?.fact})); //Usando tanto el operador map como el pipe para sacar el fact
    /*MapApiPipe.apply(dataRaw)*/
    //Es posible que para que esto funcione haya que importar el HttpClientModule en el app.module.ts o en app.config.ts
  }

  mandarDatos(body:any): Observable<any> {
    return this.httpClient.post(this.URL_DESTINO, body); //Devolviendo un observable de la peticion post, devuelve una respuesta pero tambien requiere datos
    //En este caso tambien podria ser update, estan todos los verbos disponibles, el tercer parametro son las opciones (header, etc.)
  }
}
