const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/", require("./swagger"));

router.use("/products", require("./products"));
router.use("/supplier", require("./supplier"));

module.exports = router;
