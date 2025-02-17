const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const isAuthenticated = require("../middleware/authenticate");
const validator = require("../middleware/validator");

router.get("/", isAuthenticated, userController.getAllUsers);
router.post(
  "/",
  isAuthenticated,
  validator.validateUser,
  userController.createUser
);
router.put(
  "/:userId",
  isAuthenticated,
  validator.validateUser,
  userController.updateUser
);
router.get("/:userId", isAuthenticated, userController.getUserById);
router.delete("/:userId", isAuthenticated, userController.deleteUser);

module.exports = router;
