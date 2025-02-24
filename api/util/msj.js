'use strict';

const mensajes = {
        m200: 'Petición completada con éxito',
        m204: 'Registro eliminado correctamente',
        m400: 'Error de registro, se deben llenar los campos obligatorios',
        m401: 'Petición expirada',
        m402: 'El documento adjunto no pudo ser cargado',
        m403: 'La petición no se puede ejecutar, error de autenticación',
        m404: 'No se han encontrado resultados',
        m405: 'No se puede continuar debido a errores de semantica',
        m408: 'Se ha agotado el tiempo para ejecutar la petición',
        m409: 'Ya se encuentra registrado en la base de datos',
        m500: 'Ha ocurrido un error en la petición, validar servicios requeridos',
        m502: 'Documentos adjuntos no permitidos',
        merr: 'Error general, valide accesos a base de datos'
    }

export default mensajes;