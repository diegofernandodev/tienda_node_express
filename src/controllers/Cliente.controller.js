const clienteModel = require("../models/ClienteModel");
const { ResponseStructure } = require("../helpers/ResponseStructure");


const clientecontroller = {};

clientecontroller.getAllClientes = async (req, res) => {
  try {
    const listClientes = await clienteModel.find()

    res.json(listClientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

clientecontroller.saveCliente = async (req, res) => {
  try {
    const body = req.body;
    const newCliente = new clienteModel(body);

    await newCliente.save();

    ResponseStructure.status = 200;
    ResponseStructure.message = "Cliente guardado exitosamemte";
    ResponseStructure.data = body;

    res.status(200).send(ResponseStructure);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
      errors[i] = errorsCatch[i].message;
    }

    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al guardar el cliente";
    ResponseStructure.data = errors;
    
    res.status(500).json(ResponseStructure);
  }
};

module.exports = clientecontroller;
