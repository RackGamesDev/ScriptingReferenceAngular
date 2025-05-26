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

  private readonly  URL = environment.apiUrl; //Usando un valor de environment

  constructor(private httpClient:HttpClient) { }

  recibirDatos(): Observable<any> {
    return this.httpClient.get(this.URL) //Devolviendo un observable de la peticion, que devuelve la respuesta
    //.pipe(map((dataRaw:any) => {dataRaw?.fact})); //Usando tanto el operador map como el pipe para sacar el fact
    /*MapApiPipe.apply(dataRaw)*/
    //Es posible que para que esto funcione haya que importar el HttpClientModule en el app.module.ts o en app.config.ts
  }
}
