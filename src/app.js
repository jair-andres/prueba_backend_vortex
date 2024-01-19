import express from "express";
import conductoresRoutes from "./routes/conductor.routes.js";
import vehiculosRoutes from "./routes/vehiculo.routes.js";
import pedidosRoutes from "./routes/pedidos.routes.js";

const app = express();

// middlewares
app.use(express.json());

// Routes
app.use(conductoresRoutes);
app.use(vehiculosRoutes);
app.use(pedidosRoutes);

export default app;