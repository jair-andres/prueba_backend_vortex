import { Router } from "express";
import { getConductores, getConductor, getConductorVehiculos, createConductor, updateConductor, deleteConductor } from "../controllers/conductor.controller.js";

const router = Router();

//Consultar todos los conductores
router.get("/conductores", getConductores);

//Consultar por id del conductor
router.get("/conductores/:id", getConductor);

//Consultar Vehiculos correspondientes al id del conductor
router.get("/conductores/:id/vehiculos", getConductorVehiculos);

//Registrar un conductor
router.post("/conductores", createConductor);

//Actualizar registro del conductor
router.put("/conductores/:id", updateConductor);

//Eliminar registro del conductor
router.delete("/conductores/:id", deleteConductor);

export default router;