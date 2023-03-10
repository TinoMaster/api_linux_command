const router = require("express").Router();
const CategoryController = require("../controllers/categories.controllers");

router.get("/categories", (req, res) => {
  console.log("siii");
  res.json({ entra: "siiii" });
});

module.exports = router;
