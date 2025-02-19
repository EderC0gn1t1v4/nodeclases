/**
 * 
 */

'use strict';

import express from 'express';

// Controladores:
import PruebaControl from '../../controllers/prueba/prueba.control.js';

// cons
const api = express.Router();

api.get('/pruebasControl', PruebaControl);

export default api;