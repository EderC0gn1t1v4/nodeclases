/**
 * C = Create (Inserts, Replace)
 * R = Read (Select)
 * U = Update = (Update)
 * D = Delete = (Delete)
 */
'use strict';

import TipoUser from '../../models/usuario/tipouser.model.js';
import  mensajes  from '../../util/msj.js';

/* ----------------------------------------------- Controladores ----------------------------------------------- */
// const manejoErrores(args) =>{

// }

const TipoUserCreate = async (req, res)=>{
    const { nombre_tipouser } = req.body;
    try {
        const tipousernew = await TipoUser.create({nombre_tipouser });
        res.status(200).send({ "tipo usuario nuevo": tipousernew});
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ mensaje: mensajes.m409, error: error });
        }
        if (error.name ==='SequelizeValidationError'){
            return res.status(400).json({ mensaje: mensajes.m400, error: error });
        }else {
            return res.status(500).json({ mensaje: mensajes.m500, error: error });
        }
    }
}



export default TipoUserCreate;