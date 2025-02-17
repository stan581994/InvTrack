const { body, param, validationResult } = require("express-validator");

const validateProduct = [
  body("name").notEmpty().withMessage("Name is required"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  body("quantity")
    .isInt({ gt: 0 })
    .withMessage("Quantity must be a positive integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateOrder = [
  body("orderId").notEmpty().withMessage("Order ID is required"),
  body("customerId").notEmpty().withMessage("Customer ID is required"),
  body("orderDate").isISO8601().withMessage("Order date must be a valid date"),
  body("status").notEmpty().withMessage("Status is required"),
  body("items")
    .isArray({ min: 1 })
    .withMessage("Items must be an array with at least one item"),
  body("items.*.productId")
    .notEmpty()
    .withMessage("Product ID is required for each item"),
  body("items.*.quantity")
    .isInt({ gt: 0 })
    .withMessage("Quantity must be a positive integer for each item"),
  body("items.*.price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number for each item"),
  body("totalAmount")
    .isFloat({ gt: 0 })
    .withMessage("Total amount must be a positive number"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateOrderId = [
  param("orderId").isMongoId().withMessage("Invalid order ID"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateUser = [
  body("userId").notEmpty().withMessage("User ID is required"),
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("authProvider").notEmpty().withMessage("Auth provider is required"),
  body("authProviderId").notEmpty().withMessage("Auth provider ID is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateProduct,
  validateOrder,
  validateOrderId,
  validateUser,
};
