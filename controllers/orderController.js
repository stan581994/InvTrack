const Order = require("../models/order");

const getAllOrders = async (req, res) => {
  //#swagger.tags = ['Orders']
  try {
    const orders = await Order.find();
    res.setHeader("Content-Type", "application/json");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createOrder = async (req, res) => {
  //#swagger.tags = ['Orders']
  try {
    const newOrder = new Order({
      orderId: req.body.orderId,
      customerId: req.body.customerId,
      orderDate: req.body.orderDate,
      status: req.body.status,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateOrder = async (req, res) => {
  //#swagger.tags = ['Orders']
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      {
        orderId: req.body.orderId,
        customerId: req.body.customerId,
        orderDate: req.body.orderDate,
        status: req.body.status,
        items: req.body.items,
        totalAmount: req.body.totalAmount,
      },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOrderById = async (req, res) => {
  //#swagger.tags = ['Orders']
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteOrder = async (req, res) => {
  //#swagger.tags = ['Orders']
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  getOrderById,
  deleteOrder,
};
