# Creación de una Bind Volumes

Cuando hacemos un bind mount, lo que ocurre es que, un archivo o un directorio 
de la máquina host es montado desde ese host dentro de un contenedor, es decir,
copia lo que hace el host dentro del contenedor.

```shell

  docker container run <options> <image_name> 

  OPCIONES:
    --workdir, -w: Directorio de trabajo dentro del contenedor
    sh
    

  EJEMPLO:
    docker container run `
    --name nest-app `
    --workdir /app `
    --publish 80:3000 `
    --volume ${ pwd }:/app `
    node:18-alpine `
    sh -c "yarn install && yarn start:dev" ( ejecuta un comando en linux )

```