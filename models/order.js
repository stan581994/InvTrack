const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    items: [itemSchema],
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
