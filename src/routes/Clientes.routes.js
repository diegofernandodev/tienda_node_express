const { Router } = require("express");
const routes = Router();
const { getAllClientes, saveCliente } = require('../controllers/Cliente.controller')

routes.get("/getClientes",  getAllClientes);

routes.post("/saveClientes", saveCliente);

module.exports = routes;
