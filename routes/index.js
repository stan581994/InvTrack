const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/products", require("./products"));
// router.use("/supplier ", require("./supplier"));
// router.use("/order", require("./order"));
// router.use("/user", require("./user"));

module.exports = router;
