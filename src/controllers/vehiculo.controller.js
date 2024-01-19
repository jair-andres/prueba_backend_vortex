import { Vehiculo } from '../models/Vehiculo.js';

export const getVehiculos = async (req, res) => { 
    try {
        const vehiculos = await Vehiculo.findAll();
        res.json(vehiculos)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const getVehiculo = async (req, res) => {
    try {
        const { id }= req.params;
        console.log(id);
        const vehiculo = await Vehiculo.findByPk(id)

        if (!vehiculo) return res.status(404).json({ message: "Vehiculo does not exists"})

        res.json(vehiculo)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const createVehiculo = async (req, res) => {
    const { id, modelo, placa, capacidad, conductor_id } = req.body
    try {

        const newVehiculo = await Vehiculo.create({
            id, 
            modelo, 
            placa, 
            capacidad,
            conductor_id
        })
    
        res.json(newVehiculo)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const updateVehiculo = async (req, res) => {
    try {
        const { id }= req.params;
        const { modelo, placa, capacidad, conductor_id } = req.body
        const vehiculo = await Vehiculo.findByPk(id)

        vehiculo.modelo = modelo
        vehiculo.placa = placa
        vehiculo.capacidad = capacidad
        vehiculo.conductor_id = conductor_id
        await vehiculo.save()

        res.json(vehiculo)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const deleteVehiculo = async (req, res) => {
    try {
        const { id }= req.params;

        await Vehiculo.destroy({
            where: {
                id,
            }
        })
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const getVehiculosConductorIdNull = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll({
            where: { conductor_id: null }
        })
        res.json(vehiculos)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const updateIdConductor = async (req, res) => {
    try {
        const { id }= req.params;
        const { conductor_id } = req.body
        const vehiculo = await Vehiculo.findByPk(id)

        vehiculo.conductor_id = conductor_id
        await vehiculo.save()

        res.json(vehiculo)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}