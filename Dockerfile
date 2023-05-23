# Imagen de NodeJS
FROM node:19-alpine

# Establecer directorio de trabajo
WORKDIR /var/www/html/app

# Instalar nodemon para activar el watch de los archivos
RUN npm install -g nodemon

# Copiar shell scripts
COPY docker-compose/node/scripts /var/www/docker/node

# Eliminar caracteres incompatibles
RUN sed -i 's/\r$//' /var/www/docker/node/*.sh

# Otorgar permisos de ejecución a los archivos sh
RUN chmod +x /var/www/docker/node/*.sh

# Copiar archivos de proyecto
COPY app /var/www/html/app

# Ejecutar archivo principal sh de arranque
CMD [ "/var/www/docker/node/run.sh" ]