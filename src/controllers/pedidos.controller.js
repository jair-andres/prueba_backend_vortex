import { Pedidos } from "../models/Pedidos.js";

export const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.findAll();
        res.json(pedidos)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const getPedido = async (req, res) => {
    try {
        const { id }= req.params;
        console.log(id);
        const pedidos = await Pedidos.findByPk(id)

        if (!pedidos) return res.status(404).json({ message: "Pedido does not exists"})

        res.json(pedidos)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const createPedido = async (req, res) => {
    const { id, tipo_pedido, direccion, conductor_id } = req.body
   
    try {
        const newPedido = await Pedidos.create({
            id, 
            tipo_pedido, 
            direccion,
            conductor_id
        })
    
        res.json(newPedido)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const updatePedido = async (req, res) => {
    try {
        const { id }= req.params;
        const { tipo_pedido, direccion} = req.body
        const pedido = await Pedidos.findByPk(id)

        pedido.tipo_pedido = tipo_pedido
        pedido.direccion = direccion

        await pedido.save()

        res.json(pedido)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const deletePedido = async (req, res) => {
    try {
        const { id }= req.params;

        await Pedidos.destroy({
            where: {
                id,
            }
        })
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}