const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// On remplace tous nos app. par router
const publicationController = require("../controllers/publication");
const publicationLikeCOntroller = require("../controllers/like");

router.get("/", auth, publicationController.getAllPublication); //Avoir tous les postes
router.post("/", auth, multer, publicationController.createPublication); // Creer une publication
router.put("/:id", auth, multer, publicationController.modifyPublication); // Modifier une publication
router.delete("/:id", auth, publicationController.deletePublication); // Supprimer une publication
router.post("/:id/like", auth, publicationLikeCOntroller.likePublication); // Liker une publication
router.get("/:id", auth, publicationController.getAllMyPublication);
module.exports = router;
