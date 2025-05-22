# Scripting reference Angular
Lo básico del framework Angular en español
Para abrirlo: 
`sudo npm install -g @angular/cli`
`ng new proyecto-angular`     (y y css y y)
`cd proyecto-angular`
`ng serve`  (localhost:4200) (`ng s --port=4201`) (`ng s --host =0.0.0.0 --port=4201`)
`ng generate module modules/Auth --routing` Crear un modulo, en este caso uno que maneja rutas (esto genera distintos archivos)

## Funcionamiento
- src: codigo principal de la aplicación
-    src/assets: contenido estatico (como iconos) que usaran los archivos de la aplicación
-    src/environments: archivos con las variables de entorno de desarrollo y producción, similar a un .env
-    src/app/data: archivos de datos como json, se puede usar como reemplazo temporal para pruebas de apis o bases de datos
-    src/app/modules: los módulos que se crean con los comandos
-    src/app/shared: contenido compartido entre módulos
-    src/app/app.routes.ts: configuración de que ruta va con cada módulo
- public: contenido estático
- angular.json: configuración de Angular
- package.json: configuración de NodeJS
- tsconfig.json: configuración del compilador de Typescript


## License
This project is licensed under the GNU General Public License v3.0.  
See the [LICENSE](./LICENSE.txt) file for details.

