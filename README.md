# INDICE
1. [Introducción](#introducción)
2. [Tecnologías](#tecnologías)
3. [Implementaciones](#implementaciones)
4. [Requerimientos](#requerimientos)
5. [Instalación](#instalación)
6. [Ejecución](#ejecución)
7. [Video](#video)

## Introducción

### Esta aplicación es una tienda de videojuegos desarrollada con React para el proyecto de fin de curso de Coderhouse.

En la página principal puede verse el catalogo completo. Mientras que mediante la barra de navegación puede acceder a una categoría en concreto.  
Si selecciona un juego tendrá una vista más detallada del mismo.  
En el detalle del producto puede agregar el juego al carrito, así como aumentar o diminuir la cantidad que desee comprear.  
Para finalizar la compra dirijase al carrito e ingrese sus datos personales.
La app le devolerá una factura con los datos de la compra.

## Tecnologías
* create-react-app [enlace](https://www.npmjs.com/package/create-react-app)
* react v18.1.0 [enlace](https://www.npmjs.com/package/react)
* react-dom v18.1.0 [enlace](https://www.npmjs.com/package/react-dom)
* react-router-dom v6.3.0 [enlace](https://www.npmjs.com/package/react-router-dom)
* firebase v9.8.4 [enlace](https://www.npmjs.com/package/firebase)
* bootstrap v5.2.0-beta1 [enlace](https://www.npmjs.com/package/bootstrap)
* bootstrap-icons v1.8.3 [enlace](https://www.npmjs.com/package/bootstrap-icons)

## Implementaciones

### React y React dom
Utilice React y React-dom para hacer una aplicación que cargara una sola vez y el usuario pudiera navegar rápido por sus secciones.  
De está librería aproveche **useState** para guardar datos y cambiar dinamicamente pequeñas partes del contenido.   
También use **useEffect** para poder cargar los datos de los productos luego de haberse renderizado el componente.  
**useContext** es el que centraliza todos los datos de la compra.

### React router dom
Esta librería me permite agregar navegación entre los componentes.   
Con **useParams** obtengo parte de la URL en la que estoy ubicado y la aprovecho para mostrar una cosa u otra.

### Firestore
En firestore cree una colección que contiene documentos por cada juego. Y otra colección que contiene los documentos como ordenes de compra.  
Utilizo **getDocs** y **collection** para obtener todos los documentos de la colección de juegos.  
**query** y **where** para filtrar los documentos por el genero de juego.
Utilizo **getDoc**, **doc** y **collection** para obtener un juego en concreto.

### Bootstrap
Bootstrap lo utilizo para maquetar facilmente y centrarme en la lógica de la aplicación.

### Bootstrap icons
Bootstrap icons unicamente lo utilizo para mostrar un ícono de carga en algunas partes, otro de copyrirght y el carrito.

## Requerimientos
* Un terminal
* Navegador web
    * Chrome [enlace](https://www.google.com/intl/es/chrome/?brand=YTUH&gclid=Cj0KCQjw_viWBhD8ARIsAH1mCd4bGJlLD5NwmC03wrf6p_17319JpVVembMglYzt_3K8lv2xTACWcKcaAg2cEALw_wcB&gclsrc=aw.ds)
    * Firefox [enlace](https://www.mozilla.org/es-ES/firefox/new/)
    * Edge [enlace](https://www.microsoft.com/es-es/edge)
* Node.js [enlace](https://nodejs.org/es/download)
    * Para comprobar si tiene node instalado:
        * `node -v`
* NPM (se instala junto a node)
    * Para comprobar si tiene npm instalado:
        * `npm -v`

## Instalación
1. Abrir la terminal
2. Dirigirse al directorio donde desea descargar la aplicación
3. Clonar el repositorio al equipo local
    * `git clone mzipi/gamestore-zipitria`
4. Ingresar al directorio de la aplicación
    * `cd gamestore-zipitria`
5. Instalar las dependencias
    * `npm install`

## Ejecución
1. Ejecutar la aplicación
    * `npm start`
2. Ir a la página principal
    * localhost:3000 [enlace](http://localhost:3000)
    * 127.0.0.1:3000 [enlace](http://127.0.0.1:3000)

## Video
[![Watch the video](https://i.imgur.com/4reLU8G.png)](https://drive.google.com/file/d/1zfmCVv9OFTiAUEyr7HbFXqKYXqcjLTlL/view?usp=sharing)