import definirCampos from "../schema/modelo.schema";

import { Model } from 'sequelize'
import sequelize from '../../services/conndb/conndb.js';
import TipoUser from "./tipouser.model.js";

class TipoIdentificacion extends Model {}

TipoIdentificacion.init(
    {
        nombreTipoId : definirCampos('nombre_tipo_identificacion',STRING[60])
    },
    {
        sequelize,
        timestamp: true,
        createAt: true,
        updateAt: 'updateTimestamp',
        tableName: 'TIPOIDENTIFICACION'
    }
)



class Estrato extends Model {}

Estrato.init(
    {
        nombreEstrato : definirCampos('nombre_estrato', STRING[10])
    },
    {
        sequelize,
        timestamp: true,
        createAt: true,
        updateAt: 'updateTimestamp',
        tableName: 'ESTRATO'
    }
)



class Genero extends Model {}

Genero.init(
    {
        nombreGenero : definirCampos('nombre_genero', STRING[50])
    },
    {
        sequelize,
        timestamp: true,
        createAt: true,
        updateAt: 'updateTimestamp',
        tableName: 'GENERO'
    }
)



class Etnia extends Model {}

Etnia.init(

    {
        nombreEtnia : definirCampos('nombre_etnia', STRING[25])
    },
    {
        sequelize,
        timestamp: true,
        createAt: true,
        updateAt: 'updateTimestamp',
        tableName: 'ETNIA'
    }
)

class Vulnerabilidades extends Model {}

Vulnerabilidades.init(

    {
        nombreVulnerabilidad : definirCampos('nombre_vulnerabilidad', STRING[25])
    },
    {
        sequelize,
        timestamp: true,
        createAt: true,
        updateAt: 'updateTimestamp',
        tableName: 'VULNERABILIDADES'
    }
)

class EstadoCivil extends Model {}

EstadoCivil.init(
    {
        nombreEstadoCivil : definirCampos('nombre_estado_civil', STRING[10])
    },
    {
        sequelize,
        timestamp: true,
        createAt: true,
        updateAt: 'updateTimestamp',
        tableName: 'ESTADOCIVIL'
    }
)

TipoIdentificacion.sync();
Estrato.sync();
Genero.sync();
Etnia.sync();
Vulnerabilidades.sync()
EstadoCivil.sync();

export {TipoIdentificacion, Estrato, Genero, Etnia,Vulnerabilidades, EstadoCivil}