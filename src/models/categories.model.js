const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db_config = require("../config/db.config");

const CategoriesSchema = new Schema({
  name: { type: String, required: true },
});

const CategoryModel = mongoose.model("Category", CategoriesSchema);

mongoose.connect(`${db_config.mongo_host}/${db_config.mongo_db}`);

module.exports = CategoryModel;
