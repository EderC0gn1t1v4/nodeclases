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


// Middlewares

// Rutas Exportadas

module.exports = app