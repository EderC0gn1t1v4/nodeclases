import  mensajes  from './msj.js';

const manejoError = (error, res)=>{
    if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({ 'mensaje': mensajes.m409 });
    }
    if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({ 'mensaje': mensajes.m400, 'data':error.message });
    }
    else {
        return res.json({ 'mensaje': mensajes.m500, error: error });
        }
}

export default manejoError;