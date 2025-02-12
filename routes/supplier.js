const express = require("express");
const router = express.Router();

const supplierController = require("../controllers/supplierController");
router.get("/", supplierController.getAllSuppliers);

router.post("/", supplierController.createSupplier);

router.put("/:supplierId", supplierController.updateSupplier);

router.get("/:supplierId", supplierController.getSupplierById);

router.delete("/:supplierId", supplierController.deleteSupplier);

module.exports = router;
