const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const isAuthenticated = require("../middleware/authenticate");
const validator = require("../middleware/validators");

router.get("/", isAuthenticated, orderController.getAllOrders);
router.post(
  "/",
  isAuthenticated,
  validator.validateOrder,
  orderController.createOrder
);
router.put(
  "/:orderId",
  isAuthenticated,
  validator.validateOrder,
  orderController.updateOrder
);
router.get("/:orderId", isAuthenticated, orderController.getOrderById);
router.delete("/:orderId", isAuthenticated, orderController.deleteOrder);

module.exports = router;
