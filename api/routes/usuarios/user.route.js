/**
 * 
 */
'use strict';

import express from "express";
// Controlador:
import {TipoUserCreate, getTipoUsers} from '../../controllers/usuarios/user.control.js';


const api = express.Router();

api.post('/tipouser/new', TipoUserCreate);
api.get('/tipouser/findall', getTipoUsers);

export default api;