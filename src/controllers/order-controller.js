const Order = require("../models/Order");

const ordersController = {
    // GET /orders
    index: async (req, res) => {
        try {
            const orders = await Order.findAll();
            res.json(orders);
        } catch (error) {
            console.error("Error fetching orders:", error);
            res.status(500).json({ message: "Erro ao buscar pedidos." });
        }
    },

    // POST /orders
    create: async (req, res) => {
        try {
            const { customerId, products } = req.body;

            if (!customerId || typeof customerId !== "number") {
                return res.status(400).json({ message: "ID do cliente inválido." });
            }

            if (!Array.isArray(products) || products.length === 0) {
                return res.status(400).json({ message: "A lista de produtos é inválida." });
            }

            for (const product of products) {
                if (
                    typeof product.id !== "number" || product.id <= 0 ||
                    typeof product.quantity !== "number" || product.quantity <= 0
                ) {
                    return res.status(400).json({ message: "Produtos inválidos." });
                }
            }

            const newOrder = await Order.create(customerId, products);

            if (newOrder instanceof Order) {
                res.status(201).json(newOrder);
            } else {
                res.status(400).json({ message: "Erro ao criar pedido." });
            }
        } catch (error) {
            console.error("Error creating order:", error);
            res.status(500).json({ message: "Erro interno ao criar pedido." });
        }
    },

    // GET /orders/:id
    show: async (req, res) => {
        try {
            const order = await Order.findById(Number(req.params.id));

            if (!order) {
                return res.status(404).json({ message: "Pedido não encontrado." });
            }

            res.json(order);
        } catch (error) {
            console.error("Error fetching order:", error);
            res.status(500).json({ message: "Erro ao buscar pedido." });
        }
    },

    // DELETE /orders/:id
delete: async (req, res) => {
    try {
        const { id } = req.params;

        // 🔹 Validação: ID deve ser um número válido
        if (isNaN(id) || Number(id) <= 0) {
            return res.status(400).json({ message: "ID do pedido inválido." });
        }

        // 🔹 Chama o método delete do modelo
        const result = await Order.delete(Number(id));

        if (!result.success) {
            return res.status(404).json({ message: result.message });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ message: "Erro ao deletar pedido." });
    }
}

};

module.exports = ordersController;
