/**
 * 
 */
'use strict';

import express from "express";
// Controlador:
import {TipoUserCreate, getTipoUsers, getTipoUserFind, getTipoUserById, updateTipoUser, deleteTipoUser} from '../../controllers/usuarios/user.control.js';


const api = express.Router();

api.post('/tipouser/new', TipoUserCreate);
api.get('/tipouser/findall', getTipoUsers);
api.get('/tipouser/find/:nombre_tipouser', getTipoUserFind);
api.get('/tipouser/findbyid/:id', getTipoUserById);
api.put('/tipouser/updatebyid/:id', updateTipoUser);
api.delete('/tipouser/deletebyid/:id', deleteTipoUser);

export default api;