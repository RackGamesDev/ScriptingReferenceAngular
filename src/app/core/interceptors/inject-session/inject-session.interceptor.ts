import { HttpInterceptorFn } from '@angular/common/http';
//Para que el middleware funcione hay que importarlo en el app.config.ts o app.module.ts
export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Inyectando a la peticion");
  try {
    const TOKEN = "2308947982";
    let nuevoReq = req.clone({setHeaders:{authorization:"Bearer " + TOKEN, propiedad:"ejemplo"}}); //Agregando un token para que todas las peticiones sean autenticadas
    return next(nuevoReq);
  } catch (e) {
    console.log(e);
    return next(req);
  }
};
