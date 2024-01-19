
# Prueba Técnica Backend Vortex
### Descripción requerimientos - Sistema de transporte:

Se quiere crear un sistema para una empresa de transporte, el cual permita realizar los
siguientes casos de uso (HU):

- Registrar los vehículos que se tienen disponibles para realizar los pedidos.
- Registrar los conductores que están contratados por la empresa.
- Asociar un conductor a uno o varios vehículos. En este punto se espera que al tener
un conductor seleccionado sólo cargue los vehículos que NO están asignados a
ningún otro conductor.
- Desasociar a un conductor de un vehículo. En este punto se espera que al tener un
conductor seleccionado sólo cargue los vehículos que ya han sido asignados
previamente a este conductor, para quitar la asociación.

# Hola mi nombre es Jair Bareño! 👋

Realicé la siguiente prueba para presentar mis habilidades y continuar con el proceso de selección.
## Tecnologías 🛠
- Javascript ES6+
- Node.js
- Express.js
- API's Rest
- PostgreSQL


## Instalación

Clonar repositorio donde se encuentra el código fuente de la prueba y los recursos necesarios se da por entendido que Node.js, PostgreSQL y Git están previamente instalados.

```bash
  git clones https://github.com/jair-andres/prueba_backend_vortex.git
  
  npm install 
```
    
## Configurar conexión a bases de datos

Crear una base de datos en PostgreSQL con el nombre "db_vortex" o de su prefrencia.

En el siguiente archivo: 'src/database/database.js' cambiar el siguiente parametros para establecer la conexión.

- Nombre base de datos = "db_vortex" 
- Tipo de base de datos = "postgres", 
- Contraseña de la base de datos = "myPasswordSecret"

```javascript
export const sequelize = new Sequelize("db_vortex", "postgres", "myPasswordSecret", {
    host: "localhost",
    dialect: "postgres",
});
```

Iniciar el servidor 

```bash
  npm run dev
```

## Representación grafica MER

![App Screenshot](https://github.com/jair-andres/prueba_backend_vortex/blob/master/src/images/ERM.png)


## API Reference Conductor

#### Consultar todos los conductores

```http
  GET /conductores
```

### Consultar por id del conductor

```http
  GET /conductores/:id
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del conductor |

### Consultar Vehiculos correspondientes al id del conductor

```http
  GET /conductores/:id/vehiculos
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del conductor |

### Registrar un conductor

```http
  POST /conductores
```
Body json
```json
   {
    "id": 65816,
    "identificacion": "1070658457",
    "apellido": "Garzon Gomez",
    "nombre": "Armando",
    "telefono": "3216974532",
    "direccion": "Kr 14 E 12 - 85"
    }
```
### Actualizar registro del conductor

```http
  PUT /conductores/:id
```

Body json
```json
   {
    "identificacion": "1070658457",
    "apellido": "Garzon Gomez",
    "nombre": "Armando",
    "telefono": "3216974532",
    "direccion": "Kr 14 E 12 - 85"
    }
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del conductor |

### Eliminar registro del conductor

```http
  DELETE /conductores/:id
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del conductor |

## API Reference Vehiculos

#### Consultar todos los vehículos

```http
  GET /vehiculos
```
### Consultar por id del conductor

```http
  GET /vehiculos/:id
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del vehiculo |


#### Consultar todos los vehículos sin conductor vonculado

```http
  GET /vehiculosConductorIdNull
```
### Crear registro de un vehiculo

```http
  POST /vehiculos
```

Body json
```json
   {
    "id": 45789,
    "modelo": "2023",
    "placa": "IEL 584",
    "capacidad": "4",
    "conductor_id": 65816
   }
```
### Actualizar registro de un vehiculo

```http
  PUT /vehiculos/:id
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del vehiculo |

Body json
```json
   {
    "modelo": "2023",
    "placa": "IEL 584",
    "capacidad": "4",
    "conductor_id": 65816
   }
```

### Actualizar el campo de id del conductor

```http
  PUT /vehiculos/IdConductor/:id
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del vehiculo |


Body json
```json
   {
    "conductor_id": 65816
   }
```
### Eliminar registro del vehiculo

```http
  DELETE /conductores/:id
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del conductor |

## API Reference Pedidos

#### Consultar todos los pedidos

```http
  GET /pedidos
```

### Consultar pedido por id

```http
  GET /pedidos/:id
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del pedido |

### Crear registro de un pedido

```http
  POST /pedidos
```
Body json
```json
   {
    "id": 12,
    "tipo_pedido": "envio",
    "direccion": "carrera 4",
    "conductor_id": 65816
   }
```
### Actualizar registro del pedido

```http
  PUT /pedidos/:id
```

Body json
```json
   {
    "tipo_pedido": "envio",
    "direccion": "carrera 4",
    "conductor_id": 65816
   }
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del pedido |

### Eliminar registro del pedido

```http
  DELETE /pedidos/:id
```
| Parameter | Description                |
| :-------- | :------------------------- |
| `id` | **Required**. id del pedido |

# Gracias 😄