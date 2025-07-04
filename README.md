# Docker

Docker es una plataforma abierta para desarrollar, enviar y correr nuestra aplicación. Docker 
permite separar nuestra aplicación de nuestra arquitectura, con esto podemos entregar rapidamente 
nuestro software. Con docker podemmos manejar nuestra infraestructura de la misma manera como 
manejamos nuestra aplicación.


# Contenido
1. [Comandos Docker](./docker-cheatsheet/docker-cheat-sheet.pdf).
2. [Busqueda, descarga y listar imagenes en docker](#images)


# Anexo

## [Images](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/)
Una imagen en docker es un paquete estandarizado que incluye todos los archivos, binarios, librerias, 
y configuraciones para correr un Contenedor.

- ### Busqueda de imagenes 
```sh
$ docker search docker/welcome-to-docker
```

- ###  Descarga de imagenes
```sh
$ docker pull docker/welcome-to-docker
```

- ### Listar todas las imagenes descargadas
```sh
$ docker image ls
```

* Opciones:<br>
    - **-a, --all**: muestra todas las imagenes descargadas. 

## [Containers](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)
Los contenedores son procesos aislados para cada uno de los componentes. Cada componente por ejemplo
el frontend (React), backend (Python) y la base de datos. Corre en un entorno aislado, completamente
aislado para cada uno en nuestra maquina.

- ### Correr un contenedor
```sh
$ docker container run `
    --name world-db `
    --env MARIADB_USER=user `
    --env MARIADB_PASSWORD=user `
    --env MARIADB_DATABASE=world-db `
    --dp 3306:3306 `
    --network world-db-network `
    <image_name>
```

* Opciones:<br>
    - **--name**: Asigna un nombre al contenedor.
    - **--publish, -p <hots_port>:<container_port>**: Asigna un puerto al contenedor.
    - **--env, -e <variable_name>:<variable>**: Asigna variables de entorno.
    - **--detach, -d**: Desacopla el log del contenedor de la terminal.
    - **--volume, -v**: Permite unir a un volumen.
    - **--network**: Permite conectar a una red de contenedores.

* Info:
    - **\\**:  Permite insertar multilineas en Powershell.
    - **`**:  Permite insertar multilineas en Linux. 

- ### Listar todos los contenedores
```sh
$ docker container ls <container_id>

# OR

$ docker ps
```

* Opciones:<br>
    - **--all, -a**: Lista todos los contenedores activos/inactivos.

- ### Remover un contenedor
```sh
$ docker container rm <container_id>
```

* Opciones:<br>
    - **--force, -f**: fuerza la remoción del contenedor.