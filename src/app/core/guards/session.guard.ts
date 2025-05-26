import { CanActivateFn, CanActivate } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService); //Como este archivo devuelve una funcion, se usa inject para los servicios (sin constructor)
  const router = inject(Router); //Inyectando el router para redirigir si no se cumple la condicion
  console.log(state);
  if (cookieService.get('nombre') === 'value') {
    return true; // Deja pasar solo si esa cookie tiene ese valor
  } else {
    console.log("Acceso denegado por el guard en " + route);
    router.navigate(['/lista'], { queryParams: { variable: 'hola', numero: 4 } });
    return false; // Redirige a otra ruta
  }
};
//En otros casos tambien podria exportar una clase con la funcion canActivate
