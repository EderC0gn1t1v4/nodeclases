/**
 * @description: Archivo para extraer el express del paquete
 */

'use strict'

const app = require('./app');
const db = require('../services/conndb/conndb');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3001


try {
    db.authenticate();
    app.listen(port, ()=>{
        console.log(`Base de datos Conectada, servidor escuchando en el puerto ${port}`);
    })
    
} catch (error) {
    console.log(error);
}
