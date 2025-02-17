/**
 * @description: Archivo para extraer el express del paquete
 */

'use strict'

// Constantes del servidor:

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use (express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas de módulo
const rutasPrueba = require('../routes/prueba/prueba.route');

// Middlewares

// Rutas Exportadas
app.use('/api/v1/prueba', rutasPrueba);

module.exports = app