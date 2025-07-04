# Docker

Docker es una plataforma abierta para desarrollar, enviar y correr nuestra aplicación. Docker 
permite separar nuestra aplicación de nuestra arquitectura, con esto podemos entregar rapidamente 
nuestro software. Con docker podemmos manejar nuestra infraestructura de la misma manera como 
manejamos nuestra aplicación.


# Contenido
1. [Comandos Docker](#docker-comandos).
2. [Busqueda, descarga y listar imagenes en docker](#images)


# Anexo

### [Docker Comandos](./docker-cheatsheet/docker-cheat-sheet.pdf)

### [Images](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/)
Una imagen en docker es un paquete estandarizado que incluye todos los archivos, binarios, librerias, 
y configuraciones para correr un Contenedor.

* Busqueda de imagenes 
```sh
$ docker search docker/welcome-to-docker
```

*  Descarga de imagenes
```sh
$ docker pull docker/welcome-to-docker
```

* Listar todas las imagenes descargadas
```sh
$ docker image ls
```

* Opciones:<br>
    - **-a, --all**: muestra todas las imagenes descargadas. 