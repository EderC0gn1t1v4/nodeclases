import { DataTypes } from 'sequelize';

export default function definirCampos(nombre_campo,tipo_campo, permite_nulo = false, unique = false, pk = false){
    let objeto = {
        field: nombre_campo,
        type: DataTypes[tipo_campo],
        allowNull: permite_nulo,
        unique : unique
    };
    if (pk) {
        objeto.primaryKey = pk;
        objeto.autoIncrement = true
    }
    return objeto;
}
