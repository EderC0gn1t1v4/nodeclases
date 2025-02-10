/**
 * @description: Archivo para extraer el express del paquete
 */

'use strict'

const app = require('./app');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3001
console.log(port);
