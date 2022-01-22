# notations:

## Controllers

![Arquitectura](https://static.platzi.com/media/user_upload/Captura-072763bb-e6fd-4917-bdc1-797a1768890e.jpg)

los controladores manejan los request a una API,

tienen clases y decoradores,

Validar, permisos, etc.

## Servicios

los controladores manipulan datos se conectan a los servicios y/o estos a su vez se pueden conectar a los data models o data access para modificarlos

@Injectable() => injeccion de dependencias, injectados hacia controladores.

## decoradores

como se debe comportar frente al framework

## Request

get, put, post, delete,

- get: categorias, allproducts, single product
- query: limit, filter, offset

# buenas practicas

- siempre en plural

## single responsibility

- crear metodos que solo hagan una cosa

* crear clases que atienda a pocos endpoints
* categories
* products (ejemplo)
  cada metodo tiene que tener una sola responabilidad, esto tambien se puede llevar a las clases, tiene que haber muchas clases.

## Codigos de estados

Informational responses (100–199)
Successful responses (200–299)
Redirection messages (300–399)
Client error responses (400–499)
Server error responses (500–599)

`HttpCode(HttpStatus. `

## CLI

[https://docs.nestjs.com/cli/usages](https://docs.nestjs.com/cli/usages)

como crear controladores desde el terminal...
`nest g controller nombreControlador`
`nest g controller controllers/products --flat` <= MEJOR

### MOCOS - modulo, controlador, servicio

```
nest g mo products
nest g co products
nest g s products

```

como crear servicios
