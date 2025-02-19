/**
 * 
 * 
 */
'use strict';

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../services/conndb/conndb');

class TipoUser extends Model {}

TipoUser.init(
    {
        id_tipouser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_tipouser: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
    },
        {
            sequelize,
            timestamp: true,
            createAt: true,
            updateAt: 'updateTimestamp',
            FreezeTableName: true
        }
    
);

TipoUser.sync();

export default TipoUser;