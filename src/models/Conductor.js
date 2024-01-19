import { DataTypes  } from "sequelize";
import { sequelize } from "../database/database.js";
import { Vehiculo } from "./Vehiculo.js";
import { Pedidos } from "./Pedidos.js";

export const Conductor = sequelize.define("Conductor", {
    id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
    },
    identificacion: {
        type: DataTypes.STRING(11),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(20),
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING(50),
    },
},
{
    timestamps: true, 
    freezeTableName: true
}, 
);

Conductor.hasMany(Vehiculo, {
    foreignKey: "conductor_id",
    sourceKey: "id",
});

Vehiculo.belongsTo(Conductor, {
    foreignKey: {
        name: "conductor_id",
        allowNull: false
    }, 
    targetId: "id",
});

Conductor.hasMany(Pedidos, {
    foreignKey: {
        name: "conductor_id",
        allowNull: false
    },    
    sourceKey: "id",
});

Pedidos.belongsTo(Conductor, {
    foreignKey: {
        name: "conductor_id"
    },  
    targetId: "id",
});