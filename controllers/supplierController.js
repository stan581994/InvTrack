const Supplier = require("../models/supplier");

const getAllSuppliers = async (req, res) => {
  //#swagger.tags = ['Suppliers']
  try {
    const suppliers = await Supplier.find();
    res.setHeader("Content-Type", "application/json");
    res.json(suppliers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createSupplier = async (req, res) => {
  //#swagger.tags = ['Suppliers']
  try {
    const newSupplier = new Supplier(req.body);
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateSupplier = async (req, res) => {
  //#swagger.tags = ['Suppliers']
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.supplierId,
      req.body,
      { new: true }
    );
    if (!updatedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json(updatedSupplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getSupplierById = async (req, res) => {
  //#swagger.tags = ['Suppliers']
  try {
    const supplier = await Supplier.findById(req.params.supplierId);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json(supplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteSupplier = async (req, res) => {
  //#swagger.tags = ['Suppliers']
  try {
    const deletedSupplier = await Supplier.findByIdAndDelete(
      req.params.supplierId
    );
    if (!deletedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    res.json({ message: "Supplier deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllSuppliers,
  createSupplier,
  updateSupplier,
  getSupplierById,
  deleteSupplier,
};
