const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authenticate")

const supplierController = require("../controllers/supplierController");
router.get("/",isAuthenticated, supplierController.getAllSuppliers);

router.post("/",isAuthenticated, supplierController.createSupplier);

router.put("/:supplierId",isAuthenticated, supplierController.updateSupplier);

router.get("/:supplierId", isAuthenticated, supplierController.getSupplierById);

router.delete("/:supplierId",isAuthenticated, supplierController.deleteSupplier);

module.exports = router;
