/**
 * C = Create (Inserts, Replace)
 * R = Read (Select)
 * U = Update = (Update)
 * D = Delete = (Delete)
 */
'use strict';

import TipoUser from '../../models/usuario/tipouser.model.js';
import manejoError from '../../util/error.crud.js';
import mensajes from '../../util/msj.js';
import { Op } from 'sequelize';

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
        const tipouserget =await TipoUser.findAll();
        res.status(200).json(tipouserget)
    } catch (error) {
        manejoError(error, res);
    }
}

const getTipoUserFind = async (req, res)=>{
    const { nombre_tipouser } = req.params;
    try {
        const where = {}
        if (nombre_tipouser) {
            where.nombre_tipouser = {[Op.like]: `%${nombre_tipouser}%` };
        }

        const tipouserfind = await TipoUser.findAll({where});
        res.status(200).json(tipouserfind);

    } catch (error) {
        manejoError(error, res);
    }
}

const getTipoUserById = async (req, res)=>{

    try {
        const tipouserbyid = await TipoUser.findByPk(req.params.id);
        if (tipouserbyid == null) res.status(404).json({mensaje: mensajes.m404})
        res.status(200).json(tipouserbyid)

    } catch (error) {
        manejoError(error, res);
    }
}


const updateTipoUser = async (req, res)=>{
    const id = req.params.id;
    const {nombre_tipouser} = req.body;
    try {
        const [tipouserupdate] = await TipoUser.update({nombre_tipouser},{
            where : {id_tipouser:id}
        });
        if (tipouserupdate){
            const tipouserUp = await TipoUser.findOne({where : {id_tipouser:id}});
            res.status(200).json(tipouserUp);
        }
        
    } catch (error) {
        manejoError(error, res);
    }
}

const deleteTipoUser = async (req, res)=>{
    const id = req.params.id;
    try {
        const deletedtipouser = await TipoUser.destroy({
            where : {id_tipouser:id}
        });

        if (deletedtipouser){
            res.status(204).json(mensajes.m204)
        } else {
            res.status(204).json(mensajes.m404);
        }
        
    } catch (error) {
        manejoError(error, res);
    }
}

export  {TipoUserCreate, getTipoUsers, getTipoUserFind, getTipoUserById, updateTipoUser, deleteTipoUser}