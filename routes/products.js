const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const validator = require("../middleware/validators");

router.get("/", productController.getAllProducts);
router.post("/", validator.validateProduct, productController.createProduct);
router.put(
  "/:productId",
  validator.validateProduct,
  productController.updateProduct
);
router.get("/:productId", productController.getProductById);
router.delete("/:productId", productController.deleteProduct);

module.exports = router;
