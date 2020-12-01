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
