import { DataTypes  } from "sequelize";
import { sequelize } from "../database/database.js";

export const Pedidos = sequelize.define("Pedidos", {
    id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
    },
    tipo_pedido: {
        type: DataTypes.STRING(20),
    },
    direccion: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
},
{
    timestamps: true
});