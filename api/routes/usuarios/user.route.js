/**
 * 
 */
'use strict';

import express from "express";
// Controlador:
import TipoUserCreate from '../../controllers/usuarios/user.control.js';

const api = express.Router();

api.post('/tipouser/new', TipoUserCreate);

export default api;