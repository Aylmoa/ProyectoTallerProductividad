# ProyectoTallerProductividad
Programa que genera reportes en base a disntintos xlsx


## Descripción
Esta aplicación lee archivos .xlsx y los convierte en formato .json para facilitar su manipulación 

Esta aplicación se creo con el fin de facilitar el proceso de captura de datos que realiza una empresa constructora.

Para arreglar esta situación la aplicación les permite hacer los reportes diarios de compras/ventas a partir de los archivos de Excel subidos y convertidos a .json.

Diagrama de la aplicación

![image](https://user-images.githubusercontent.com/90363334/204041123-054ff2f4-f768-49e1-a625-be86ec6d9028.png)

Table of Contents
| Sección  | Archivo |
| ------------- | ------------- |
| Descripción  | (README.md)  |
| Requerimientos  | (README.md)  |
| Instalación  | (README.md)  |
| Configuración  | (README.md)  |
| Uso  | (README.md)  |
| Contribución  | (README.md)  |
| Roadmap  | (README.md)  |


## Requerimientos
Codificado en Javascript.

La aplicación requiere la libreria SheetJS=xlsx: 0.18.5 para poder leer los archivos.

Requiere de la base de datos de xlsx que se quieren convertir para poder funcionar.

## Instalación
Para poder instalar el programa se tiene que bajar el programa desde el repositorio y correr desde el equipo que se quiera usar.

Para realizar pruebas se tiene que realizar las pruebas necesarias de manera manual.

Para subir a la nuve se tiene que contratar el servicio del servidor donde se quiere hostear y dependiendo del servidor tiene disntintas maneras de instalar


## Configuración
Para modificar el programa se tiene que cambiar la linea de lectura de los archivos de lectura, que es la variable "excel" en el archivo index.js

Si cambia el nombre del archivo de excel a modificar se tiene que cambiar dentro del programa


## Uso
### Usario
Abra el programa y ejecute para obtener el archivo convertido
### Administrador
Abra el programa y ejecute para obtener el archivo convertido


## Contribución

Para contribuir al programa contactar a @Aylmoa en Github o a lugoleonardo1304@gmail.com

Para clonar el repositorio: 
- git remote add origin https://github.com/Aylmoa/ProyectoTallerProductividad.git
- git branch -M main
- git push -u origin main

Para crear nuevo branch:
- git checkout -b "Nombre de bramch"
***
Hacer cambios
***
- git add .
- git commit -m "Cambios realizados"
- git push -u origin "Nombre de branch"

Para hacer pull request:
Contactar a Administrado

## Roadmap
Funciones planeadas:
- Creación de reportes a partir de los .json
- Ejecutable para facilitar uso
- Leer disntintos datos

Requerimientos que se implementarán en un futuro.
