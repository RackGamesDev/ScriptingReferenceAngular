# Scripting reference Angular
Lo básico del framework Angular en español
Para usarlo: 
- `sudo npm install -g @angular/cli`
- `ng new proyecto-angular`     (y y css y y)
- `cd proyecto-angular`
- `ng serve`  (localhost:4200) (`ng s --port=4201`) (`ng s --host =0.0.0.0 --port=4201`)
- `ng generate module modules/Auth --routing` Crear un modulo, en este caso uno que maneja rutas (esto genera distintos archivos)
- `ng generate component shared/SideBar` Crear un componente (en las últimas versiones van cada uno por su cuenta independientemente)
- `ng generate pipe shared/pipes/order-list/orderList` Crear un pipe (clases para transformar datos en otros llamables fácilmente desde cualquier lado)
- `ng generate directive shared/directives/ImgBroken` Crea una directiva (un archivo con normas y comportamientos agregables mediante atributo a una etiqueta)
- `ng generate service shared/services/autentificacion/Autentificacion` Crea un servicio dentro del módulo (una clase con distintas funciones y variables para un uso concreto que se puede ir usando por la aplicación)
- `ng generate guard core/guards/session/Session` (CanActivate) Crea un guard típico (comprobante para proteger una ruta)
- `ng generate interceptor core/interceptors/inject-session/InjectSession` Crea un middleware para alterar las peticiones http
- También se pueden generar clases, enums, interfaces, archivos de environment, nuevas carpetas aparte de app, librerias (código reusable que puede contener cualquier objeto antes mencionado)


## Funcionamiento
Se crean módulos (que pueden tener componentes dentro) a los cuales se acceden mediante rutas, y estos modulos pueden mostrar componentes (html), los componentes pueden ser propios de cada modulo o ser compartidos (carpeta shared). Los modulos pueden usar componentes y si tienen el routing (x-routing.module.ts) pueden redicirig a otros modulos/componentes con sub paths
- src: código principal de la aplicación
-    src/assets: contenido estático (como iconos) que usaran los archivos de la aplicación
-    src/environments: archivos con las variables de entorno de desarrollo y producción, similar a un .env
-    src/app/data: archivos de datos como json, se puede usar como reemplazo temporal para pruebas de apis o bases de datos
-    src/app/core/models: modelos para los objetos que manejará la aplicación y la supuesta base de datos
-    src/app/core/guard: código con condiciones para determinar si se da acceso a una ruta o no (se usa en el routing)
-    src/app/core/interceptors: middlewares que alteran las propiedades de las peticiones http
-    src/app/modules: los módulos que se crean con los comandos
-    src/app/shared/components: componentes compartidos en toda la aplicación
-    src/app/shared/pipes: archivos con las clases de los pipes
-    src/app/shared/directives: archivos con las directivas (normas sobre etiquetas)
-    src/app/sharec/services: servicios usados globalmente
-    src/app/app.routes.ts: configuración de que ruta va con cada módulo
-    src/app/modules/algunmodulo/pages: distintos componentes base del módulo
-    src/app/modules/algunmodulo/components: subcomponentes exclusivos del módulo
-    src/app/modules/algunmodulo/services: crear un servicio, en este caso pensado para ese módulo
- public: contenido estático
- angular.json: configuración de Angular
- package.json: configuración de NodeJS
- tsconfig.json: configuración del compilador de Typescript
- Para el testing, se generan archivos .spec.ts junto a los objetos creados con ng generate, se pueden usar testers como karma, jasmine o jest, se ejecutan con `ng test` (hay que arreglar primero todos los .spec.ts, cosa que no se hizo en este proyecto debido a la falta de recursos)
- No se pueden hacer builds con Angular 17 o mayor de momento, es necesario hacer downgrade a Angular 16 o anterior

## License
This project is licensed under the GNU General Public License v3.0.  
See the [LICENSE](./LICENSE.txt) file for details.

