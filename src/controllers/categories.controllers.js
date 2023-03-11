const CategoryController = () => {};
const CategoryModel = require("../models/categories.model");

CategoryController.get_all = async (req, res) => {
  try {
    const resp = await CategoryModel.find();
    res.status(200).json({
      success: true,
      message: "Datos obtenidos satisfactoriamente",
      data: resp,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: true, message: "Error al obtener las categorias" });
  }
};

CategoryController.save = async (req, res) => {
  const data = req.body;
  try {
    const resp = await CategoryModel.create(data);
    res
      .status(201)
      .json({ success: true, message: "Dato introducido satisfactoriamente" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: true, message: "Error al introducir el dato" });
  }
};

module.exports = CategoryController;
