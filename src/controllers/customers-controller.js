const Customer = require("../models/Customer");

const customersController = {
  async index(req, res) {
    try {
      const customers = await Customer.findAll();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching customers", error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newCustomer = await Customer.create(req.body);
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) return res.status(404).json({ message: "Customer not found!" });
      res.json(customer);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving customer", error: error.message });
    }
  },

  async update(req, res) {
    try {
      const updatedCustomer = await Customer.update(req.params.id, req.body);
      if (!updatedCustomer) return res.status(404).json({ message: "Customer not found!" });
      res.json(updatedCustomer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deletedCustomer = await Customer.delete(req.params.id);
      if (!deletedCustomer) return res.status(404).json({ message: "Customer not found!" });
      res.json({ message: "Customer deleted successfully", deletedCustomer });
    } catch (error) {
      res.status(500).json({ message: "Error deleting customer", error: error.message });
    }
  }
};

module.exports = customersController;
