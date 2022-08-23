const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/user/", auth, userController.getProfil);
router.delete("/user/", auth, userController.deleteProfil);
module.exports = router;
