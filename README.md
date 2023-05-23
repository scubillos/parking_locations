 
# Auth - Parkin - ArchiPlus

## Compilacion
1. Clonar este repositorio.
2. Ubicarse en una terminal en el proyecto clonado.
3. Ejecutar `docker build . -t archiplus/parking-locations`
4. Verficar imagen creada `docker image ls`


## Instalación con docker compose
1. Clonar este repositorio.
2. Ubicarse en una terminal en el proyecto clonado.
3. Ejecutar `docker compose build`
4. Ejecutar `docker compose up -d`
5. Listo

**Nota:** Asegurarse de que el puerto *3000* se encuentre libre antes de ejecutar el paso 4.

## Despliegue con Kubernetes
1. Clonar este repositorio.
2. Ubicarse en una terminal en el proyecto clonado.
3. Ejecutar `docker build . -t archiplus/parking-locations`
4. Solo en K3S `docker save archiplus/parking-locations | sudo k3s ctr images import -`
5. Ejecutar `kubectl apply -f mysql-pv.yml`
6. Ejecutar `kubectl apply -f parking-locations.yml`
7. Listo

## Tecnologías
- NodeJs
- Express JS
- MySQL 5.7
- Kubernetes
- Docker

## Postman
La colección de postman con los servicios GET y POST es el archivo ***locations.postman_collection.json***.
