/**
 * 
 * @author:
 */

'use strict';

const { mensajes } = require('../../util/msj');

/* ----------------------------------------------- Controladores ----------------------------------------------- */
const PruebaControl = async (req, res)=>{
    let now = new Date();
    let horaActual = now.toLocaleDateString('es-ES');
    res.status(200).send({
        mensajes: mensajes,
        ahora: horaActual
    });
}

module.exports = {
    PruebaControl
}