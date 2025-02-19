/**
 * @description: Archivo para extraer el express del paquete
 */

'use strict'

// Constantes del servidor:

// const express = require('express');
// const cors = require('cors');
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use (express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas de módulo
import api from '../routes/prueba/prueba.route.js';

// Middlewares

// Rutas Exportadas
app.use('/api/v1/prueba', api);

// Exportamos el módulo
export default app;