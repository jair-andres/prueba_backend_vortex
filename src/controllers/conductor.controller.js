import { Conductor } from "../models/Conductor.js";
import { Vehiculo } from "../models/Vehiculo.js";

export const getConductores = async (req, res) => {
    try {
        const conductores = await Conductor.findAll();
        res.json(conductores)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const getConductor = async (req, res) => {
    try {
        const { id }= req.params;
        console.log(id);
        const conductor = await Conductor.findByPk(id)

        if (!conductor) return res.status(404).json({ message: "conductor does not exists"})

        res.json(conductor)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const getConductorVehiculos = async (req, res) => {
    const { id } = req.params
    const vehiculos = await Vehiculo.findAll({
        where: { conductor_id: id }
    })
    res.json(vehiculos)
}

export const createConductor = async (req, res) => {
    const { id, identificacion, apellido, nombre, telefono, direccion} = req.body
    
    try {
        const newConductor = await Conductor.create({
            id, 
            identificacion, 
            apellido, 
            nombre, 
            telefono, 
            direccion
        })
    
        res.json(newConductor)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const updateConductor = async (req, res) => {
    try {
        const { id }= req.params;
        const { identificacion, apellido, nombre, telefono, direccion} = req.body
        const conductor = await Conductor.findByPk(id)

        conductor.identificacion = identificacion
        conductor.apellido = apellido
        conductor.nombre = nombre
        conductor.telefono = telefono
        conductor.direccion = direccion

        await conductor.save()

        res.json(conductor)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const deleteConductor = async (req, res) => {
    try {
        const { id }= req.params;

        await Conductor.destroy({
            where: {
                id,
            }
        })
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}