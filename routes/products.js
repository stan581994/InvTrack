const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const validator = require("../middleware/validators");
const isAuthenticated = require("../middleware/authenticate");

router.get("/",isAuthenticated, productController.getAllProducts);
router.post("/",isAuthenticated, validator.validateProduct, productController.createProduct);
router.put(
  "/:productId",
  isAuthenticated,
  validator.validateProduct,
  productController.updateProduct
);
router.get("/:productId", isAuthenticated,productController.getProductById);
router.delete("/:productId", isAuthenticated,productController.deleteProduct);

module.exports = router;
