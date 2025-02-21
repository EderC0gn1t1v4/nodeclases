/**
 * C = Create (Inserts, Replace)
 * R = Read (Select)
 * U = Update = (Update)
 * D = Delete = (Delete)
 */
'use strict';

import TipoUser from '../../models/usuario/tipouser.model.js';
import manejoError from '../../util/error.crud.js';

/* ----------------------------------------------- Controladores ----------------------------------------------- */

const TipoUserCreate = async (req, res)=>{
    const { nombre_tipouser } = req.body;
    try {
        const tipousernew = await TipoUser.create({ nombre_tipouser });
        res.status(201).json({ tipousernew });
    } catch (error) {
        manejoError(error, res);
    }
}

const getTipoUsers = async (req, res)=>{
    try {
        const tipouserfind =await TipoUser.findAll();
        res.status(200).json(tipouserfind)
    } catch (error) {
        manejoError(error, res);
    }
}

export  {TipoUserCreate, getTipoUsers}