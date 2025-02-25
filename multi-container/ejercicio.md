1 - CREAR UN VOLUMEN

```shell
  docker volume create postgres-laboratorio
```

2 - MONTAR LA IMAGEN

```shell
  docker container run `
  --detach `
  --name postgres-db-laboratorio `
  --env POSTGRES_PASSWORD=123456 `
  --volume postgres-laboratorio:/var/lib/postgresql/data `
  --publish 5432:5432 `
  postgres:15-alpine 
```

3 - MONTAR LA IMAGEN

```SHELL
  docker container run `
  --detach `
  --name pgAdmin-laboratorio `
  --env PGADMN_DEFAULT_EMAIL=test@test.com `
  --env PGADMIN_DEFAULT_PASSWORD=123456 `
  --volume postgres-laboratorio:/var/lib/postgresql/data `
  --publish 8080:80 `
  docker pull dpage/pgadmin4 

```

4 - CREAR LA RED

```shell
  docker network create postgres-network-laboratorio
```

5 - ASIGNAR LOS CONTENEDORES A LA RED
```shell
  docker network connect <nombre_de_la_red> <nombre_del_contenedor>
```

6 - INTENTAR LA CONEXION CON LA BASE DE DATOS

Acceder a [localhost](http://localhost:8080/)

```
  - Click en Servers
  - Click en Register > Server
  - Colocar el nombre de: "SuperHeroesDB" (el nombre no importa) 
  - Ir a la pestaña de connection
  - Colocar el hostname "postgres-db" (el mismo nombre que le dimos al contenedor)
  - Username es "postgres" y el password: 123456
  - Probar la conexión
``` 