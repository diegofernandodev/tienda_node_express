const proveedorModel = require("../models/ProveedoresModel");
const { ResponseStructure } = require("../helpers/ResponseStructure");


const proveedorcontroller = {};

proveedorcontroller.getAllProveedores = async (req, res) => {
  try {
    const listProveedores = await proveedorModel.find()

    res.json(listProveedores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

proveedorcontroller.saveProveedor = async (req, res) => {
  try {
    const body = req.body;
    const newProveedor = new proveedorModel(body);

    await newProveedor.save();

    ResponseStructure.status = 200;
    ResponseStructure.message = "Proveedor guardado exitosamemte";
    ResponseStructure.data = body;

    res.status(200).send(ResponseStructure);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
      errors[i] = errorsCatch[i].message;
    }

    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al guardar el proveedor";
    ResponseStructure.data = errors;
    
    res.status(500).json(ResponseStructure);
  }
};

module.exports = proveedorcontroller;
