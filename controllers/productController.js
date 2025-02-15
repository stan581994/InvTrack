const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  //#swagger.tags = ['Products']
  try {
    const products = await Product.find();
    res.setHeader("Content-Type", "application/json");
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  //#swagger.tags = ['Products']
  try {
    const newProduct = new Product({
      productId: req.body.productId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      supplierId: req.body.supplierId,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateProduct = async (req, res) => {
  //#swagger.tags = ['Products']
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        productId: req.body.productId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        supplierId: req.body.supplierId,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    if (err instanceof mongoose.CastError) {
      return res.status(400).json({ error: "Invalid Product ID" });
    }
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  //#swagger.tags = ['Products']
  try {
    const product = await Product.findById(req.params.orderId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  //#swagger.tags = ['Products']
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};
