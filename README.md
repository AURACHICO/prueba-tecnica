# RegistrosBuscados
Es un sistemas que permite atrabes de una API , extraer los datos que esta obtenga, para la busqueda de dichas palabras calves o datos , digitadas por el usuario donde los resultados se mostraran en una tabla. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Instalación 
1. Entrar a tu navedador descargar e instalar node.js
2. Entrar al cmd o simbolo del sistema
3. Instalar angular con el comando "npm install -g @angular/cli@latest", con esto instalado se puede generar proyectos de angular muy facil.
4. Ingresmos a la ruta donde tenemos el proyecto ej: cd c:/prueba/prueba y le dan enter.
5. ya estando dentro de la ruta, creamos el proyecto con el comando (ng new) , le damos enter y nos dice que le coloquemos un nombre al proyecto ej: prueba, le damos enter y nos dice que si queremos configurar el routing de angular a los cual responderias con "no" por que genera fallos , le damos enter y nos pregunta que formatos de estilo queremos dan varias obciones pero sale una  por defecto que es CSS la cual la dejaremos asi, le damos enter y muestra como agular genera toda la estructura del archivo y directorios basicos para empezar un proyecto.
6. Verificamos que el proyecto este hecho , para eso buscamos la ruta con "cd nombredel proyecto".
7. Compilamos el proyecto con los comdandos "ng serve".
8. Verificamos si todo esta bien entrando a localhost:4200 que es donde se aloja por defecto el proyecto.

## Solución del proyecto
1. Instale en el cmd la api con el comando "npm i json-server".
2. Cree un repositorio en Github, donde creamos un archivo llamado "db.json" que contenga un array .
3. Dentro del proyecto cree una una carpeta llamda components y dentro de ella una llamada posts directamente desde el cmd con los siguientes comdandos "ng g c components/posts".
4. Cree otra carpeta llamda pipe "ng g pipes/filter", donde vamos a crear el filtro del buscar.
5. Entramos la componente principal que es app.component.html eliminamos todo y colcamos nuestro componente posts que se puede llamar por el selector "<app-posts></app-posts>".
6. Cree una carpeta services "ng g service/registro", donde cosumiremos la API .
7. Entramos a app.module.ts y importamos los mudeos que necesitaremos los cuales son "HttpClientModule, FormsModule, FilterPipe y PostsComponent".
8. Entramos a registro.servide.ts, importamos el HttpClient y HttpHeaders para poder consumir la API.
9. Entramos a posts.component.ts , importamos registro.service , para obtener los datos de la API
y cree una variable llamada filterPost que para los filtros al momento de buscar las palabras claves.
10.  Entramos a posts.component.html y creamos la tabla con su estilo , donde vamos a llamar a los datos para mostrarlos y hacer el filtro de busqueda.
11. Entramos a filter.pipe.ts y creamos la funcion para la busqueda donde validamos que pueda buscar en minuscular y mayusculas , tambien pueda buscar por el nombre ,apellido y correo.
12. Por ultimo ya se muestra el filtro con los datos de la API

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
