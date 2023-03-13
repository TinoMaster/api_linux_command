const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categories.controllers");

router.get("/categories", CategoryController.get_all);
router.post("/categories", CategoryController.save);
router.delete("/categories/:id", CategoryController.delete);

module.exports = router;
