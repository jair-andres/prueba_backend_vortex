import Sequelize from "sequelize";

export const sequelize = new Sequelize("db_vortex", "postgres", "myPasswordSecret", {
    host: "localhost",
    dialect: "postgres",
});