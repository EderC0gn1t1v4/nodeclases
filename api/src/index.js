/**
 * @description: Archivo para extraer el express del paquete
 */

'use strict'

import app from './app.js'
import db from '../services/conndb/conndb.js';
import { configDotenv } from 'dotenv';

configDotenv();

const port = process.env.PORT || 3001

try {
    db.authenticate();
    app.listen(port, ()=>{
        console.log(`Base de datos Conectada, servidor escuchando en el puerto ${port}`);
    })
    
} catch (error) {
    console.log(error);
}