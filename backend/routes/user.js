const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/user/:id", userController.getProfil);
router.delete("/user/:id", userController.deleteProfil);
module.exports = router;
