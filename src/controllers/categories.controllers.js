const CategoryModel = require("../models/categories.model");
const CategoryController = () => {};

CategoryController.get_all = (req, res) => {
  console.log("siii");
  try {
    CategoryModel.find().exec((err, docs) => {
      if (err) res.status(404).json({ error: true, message: "" });
      else res.status(200).json({ success: true, message: "", data: docs });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = CategoryController;
