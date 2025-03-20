# Creación de imagenes por medio de Dockerfile

Para la creación de una imagen podemos tomar de ejemplo los siguiente.

```bash
# Crea una nueva imagen en base a otra imagen
FROM node:18-alpine

# WORKDIR
WORKDIR /app

# Copiar los archivos al contenedor en el workdir
COPY . ./

# Instalar las dependencias
RUN npm install

# Ejecutar la aplicacion
CMD ["node", "app.js"]
```

# Construir una imagen por medio de Dockerfile

```shell
docker build `
  --tag cron-ticker-test `
  .
```