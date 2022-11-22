
##  Iniciando os serviços

Pré requisoto:
- docker 
- Makefile 

Caso não queira utilizar o make, basta utilizar o CLI do docker-compose.

```bash 
$ cd infra
$ make up
```

-----

## Endpoints
- Select all: /api/users
- Select only: /api/users/ID


- Create user: /api/users
```json
{
    "firstName": "my Name",
    "lastName": "my lastname",
    "phoneNumber": "xx xxxxxxx",
    "street": "My address",
    "zipCode": "xxxx"
}
```
- Update user: /api/users/ID
```json
{
    "firstName": "my Name updating",
    "lastName": "my lastname",
    "phoneNumber": "xx xxxxxxx",
    "street": "My address",
    "zipCode": "xxxx"
}
```
- Delete user: /api/users/ID

-----

## Techs:
- TypeScript
- Express
- TypeORM
- Postgres
- Docker