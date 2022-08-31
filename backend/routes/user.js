const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");
const password = require("../middleware/password");

router.post("/signup", password, userController.signup);
router.post("/login", userController.login);
router.get("/user/", auth, userController.getProfil);
router.delete("/user/", auth, userController.deleteProfil);
module.exports = router;
