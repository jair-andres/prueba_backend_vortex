import app from "./app.js";
import { sequelize } from "./database/database.js";

// Models
import "./models/Vehiculo.js";
import "./models/Pedidos.js";
import "./models/Conductor.js";

async function main() {
    try {
        await sequelize.sync({ force: true });
        console.log("Connection has been established successfully.");
        app.listen(3000)
        console.log("server is listening on port", 3000);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main();
