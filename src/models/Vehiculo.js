import { DataTypes  } from "sequelize";
import { sequelize } from "../database/database.js";

export const Vehiculo = sequelize.define("Vehiculo", {
    id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
    },
    modelo: {
        type: DataTypes.STRING(4),
        allowNull: false,
    },
    placa: {
        type: DataTypes.STRING(7),
        allowNull: false,
    },
    capacidad: {
        type: DataTypes.STRING(7),
    }
},
{
    timestamps: true,
    freezeTableName: true
});