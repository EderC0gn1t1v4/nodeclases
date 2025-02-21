/**
 * 
 */
'use strict';

import express from "express";
// Controlador:
import {TipoUserCreate, getTipoUsers, getTipoUserFind, getTipoUserById} from '../../controllers/usuarios/user.control.js';


const api = express.Router();

api.post('/tipouser/new', TipoUserCreate);
api.get('/tipouser/findall', getTipoUsers);
api.get('/tipouser/find/:nombre_tipouser', getTipoUserFind);
api.get('/tipouser/findbyid/:id', getTipoUserById);

export default api;