/**
 * 
 * 
 */
'use strict';

import { DataTypes, Model } from 'sequelize'
import sequelize from '../../services/conndb/conndb.js';

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
            freezeTableName: true
        }
    
);

TipoUser.sync();

export default TipoUser;