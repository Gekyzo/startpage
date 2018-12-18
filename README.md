## Inspirado en la charla MeetUp: Creando una página dinámica en GitHub

- Charla realizada el 11/12/2018

- Ponente: Jesus Javier puente 
    - [GitHub](https://github.com/chuchip)
    - [Profesor-P](http://www.profesor-p.com/)
    - [La Rioja Tech Alliance](http://www.lariojatech.org/)

- Herramientas mencionadas:
    - [Travis](https://travis-ci.org/): Integración continua
    - [Hugo](https://gohugo.io/): Framework para crear sites

***Proyecto de prueba para utilizar la funcionalidad GitHub pages.***

***Todos los archivos de este repo están alojados en la rama gh-pages***

***La web se puede ver en: `https://gekyzo.github.io/startpage/`***

Podemos almacenar sites generados con HTML, CSS y JS directamente desde GitHub.

Esto se puede hacer de tres formas distintas:

- GitHub puede crear una web con el contenido de `README.md` que tengamos alojado en master

- También puede crear una web con los archivos que tengamos alojados en la rama master

- Por último, creamos la rama reservada **gh-pages** y alojamos ahí los archivos de la web. Con esta última forma podemos tener distintos archivos en *master* y *gh-pages*

### Explicación para el tercer método:

- Creamos la página y la alojamos en una branch llamada **gh-pages**

- Dentro del repositorio, en el grupo **GitHub Pages**, seleccionamos dicha branch.

- Ahora la ruta de acceso a nuestro site será https://*USERNAME*.github.io/*PROJECT*/

# Startpage

En este proyecto contamos con una pequeña Homepage para realizar las principales funciones de nuestro día a día.