# Blackstart-Serverless [nodejs, mysql, swapi, docker, postman]

##### Proyecto SWAPI

+ database
    + db.sql `[ejecutar script de creación bd]` 
    + keys.js

`archivo keys.js debe ser cambiado por credenciales de servidor mysql`

```javascript
module.exports = {
    database: {
        host: 'localhost',
        user: 'USUARIO',
        password: 'CONTRASEÑA',
        database: 'blackstart'
    }
};
```
# Instalaciones. [local]:
#### linea de comando terminal (en el proyecto raiz)

+ $ npm install

+ $ serverless invoke local -f getApiPeoples                                                      `// Obtiene people del servicio SWAPI/`
+ $ serverless invoke local -f getSwapiPeople --data '{ "queryStringParameters": {"id":"1"}}'.   `// Obtiene people del servicio SWAPI/`
+ $ serverless invoke local -f getSwapiPeoples --data '{ "queryStringParameters": {"page":"1"}}' `// Lista los peoples del servicio SWAPI/`


### Images
+ $ serverless invoke local -f getApiPeople --data '{ "queryStringParameters": {"id":"1"}}'       `// Lista los peoples de la tabla mysql/`


![](https://drive.google.com/file/d/1J8uho2pUOEDrWXsYq1mjMPhHCgamooQ3/view?usp=sharing)

