# CREACION DE DOCKER COMPOSE

Docker compose es una herramienta que se desarrolló para ayudar a definir y 
compartir aplicaciones de varios contenedores.

```yml
# Versión a usar en docker-compose ( obsolete )
version: '3'

# Un servicio es una definición abstracta sobre los recursos computacionales 
# con lo que una aplicación puede ser escalada o reemplazada independientemente
# de otros componentes. 
services:
  # Nombre del servicio
  backend:
    # Nombre del contenedor
    container_name: node-backend

    # Nombre de la imagen a utilizar
    image: node:15-alpine

    # Depende de otro servicio
    depends_on:
      - database

    # Construcción de la imagen
    build:
      context: .
      dockerfile: Dockerfile
    
    # Directorio en el que trabaja
    working_dir: /app

    # Ejecuta un comando shell dentro
    command: sh -c "npm install && npm run dev"
  
    # Reiniciar el contenedor si se detiene
    restart: always


  # Otro servicio
  database:
    # CONFIGURACION DEL OTRO SERVICIO
```