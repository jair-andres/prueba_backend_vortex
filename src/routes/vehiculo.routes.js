import { Router } from "express";
import { getVehiculos, getVehiculo, getVehiculosConductorIdNull, createVehiculo, updateVehiculo, updateIdConductor, deleteVehiculo } from "../controllers/vehiculo.controller.js";

const router = Router();

// Consultar todos los vehiculos
router.get("/vehiculos", getVehiculos);

// Consultar por id de vehiculos
router.get("/vehiculos/:id", getVehiculo);

// Consultar vehiculos sin conductor vonculado
router.get("/vehiculosConductorIdNull", getVehiculosConductorIdNull);

// Registrar un vehiculo
router.post("/vehiculos", createVehiculo);

// Actualizar un vehiculo
router.put("/vehiculos/:id", updateVehiculo);

// Actualizar el campo de id del conductor
router.put("/vehiculos/IdConductor/:id", updateIdConductor);

// Eliminar registro del vehiculo
router.delete("/vehiculos/:id", deleteVehiculo);

export default router;