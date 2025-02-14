## Creación de un contenedor

```shell
  docker container run <options> <image_name> 

  OPCIONES:
    --name: nombre del nuevo contenedor
    --publish, -p: puerto en el que se va mostrar ( HOST_PORT:CONTAINER_PORT ) 
    --env, -e: variables de entorno ( MARIADB_USER_NAME=user-example )
    --detach, -d: desacopla el log del contenedor de la terminal

  EJEMPLO:
    docker container run `
    --name world-db `
    --env MARIADB_USER=user `
    --env MARIADB_PASSWORD=user `
    --env MARIADB_DATABASE=world-db `
    --dp 3306:3306
    mariadb:11.4-ubi
    ` -> permite insertar multilineas en powershell
```

## Listar todos los contenedores
```shell
  docker container ls || docker ps

  OPCIONES:
    --all, -a: lista todos los contenedores activos/inactivos
```

## Remover un contenedor

```
  docker container rm <CONTAINER_ID>

  OPCIONES:
    --force, -f: fuerza la remoción del contenedor
```