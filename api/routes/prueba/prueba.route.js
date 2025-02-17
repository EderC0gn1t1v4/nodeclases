/**
 * 
 */

'use strict';

const express = require('express');

// Controladores:
const pruebas = require('../../controllers/prueba/prueba.control');

// cons
const api = express.Router();

api.get('/pruebasControl', pruebas.PruebaControl);

module.exports = api;