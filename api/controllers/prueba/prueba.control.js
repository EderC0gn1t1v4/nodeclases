/**
 * 
 * @author:
 */

'use strict';

import  mensajes  from '../../util/msj.js';

/* ----------------------------------------------- Controladores ----------------------------------------------- */
const PruebaControl = async (req, res)=>{
    let now = new Date();
    let horaActual = now.toLocaleDateString('es-ES');
    res.status(200).json({
        mensajes: mensajes,
        ahora: horaActual
    });
}

export default PruebaControl