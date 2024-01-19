import { Router } from "express";
import { getPedidos, getPedido, createPedido, updatePedido, deletePedido } from "../controllers/pedidos.controller.js";

const router = Router();

// Consultar todos los pedidos
router.get("/pedidos", getPedidos);

// Consultar pedido por id
router.get("/pedidos/:id", getPedido);

// Crear registro de un pedido
router.post("/pedidos", createPedido);

// Editar registro del pedido
router.put("/pedidos/:id", updatePedido);

// Eliminar registro del pedido
router.delete("/pedidos/:id", deletePedido);

export default router;