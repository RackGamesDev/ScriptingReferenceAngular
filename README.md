# Scripting reference Angular
Lo básico del framework Angular en español
Para usarlo: 
- `sudo npm install -g @angular/cli`
- `ng new proyecto-angular`     (y y css y y)
- `cd proyecto-angular`
- `ng serve`  (localhost:4200) (`ng s --port=4201`) (`ng s --host =0.0.0.0 --port=4201`)
- `ng generate module modules/Auth --routing` Crear un modulo, en este caso uno que maneja rutas (esto genera distintos archivos)
- `ng generate component shared/SideBar` Crear un componente (en las últimas versiones van cada uno por su cuenta independientemente)
- `ng generate pipe shared/pipes/orderList` Crear un pipe (clases para transformar datos en otros llamables fácilmente desde cualquier lado)

## Funcionamiento
Se crean módulos (que pueden tener componentes dentro) a los cuales se acceden mediante rutas, y estos modulos pueden mostrar componentes (html), los componentes pueden ser propios de cada modulo o ser compartidos (carpeta shared). Los modulos pueden usar componentes y si tienen el routing (x-routing.module.ts) pueden redicirig a otros modulos/componentes con sub paths
- src: código principal de la aplicación
-    src/assets: contenido estático (como iconos) que usaran los archivos de la aplicación
-    src/environments: archivos con las variables de entorno de desarrollo y producción, similar a un .env
-    src/app/data: archivos de datos como json, se puede usar como reemplazo temporal para pruebas de apis o bases de datos
-    src/app/core/models: modelos para los objetos que manejará la aplicación y la supuesta base de datos
-    src/app/modules: los módulos que se crean con los comandos
-    src/app/shared/components: componentes compartidos en toda la aplicación
-    src/app/shared/pipes: archivos con las clases de los pipes
-    src/app/app.routes.ts: configuración de que ruta va con cada módulo
- public: contenido estático
- angular.json: configuración de Angular
- package.json: configuración de NodeJS
- tsconfig.json: configuración del compilador de Typescript


## License
This project is licensed under the GNU General Public License v3.0.  
See the [LICENSE](./LICENSE.txt) file for details.

