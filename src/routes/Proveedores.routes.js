const { Router } = require("express");
const routes = Router();
const { getAllProveedores, saveProveedor } = require('../controllers/Proveedor.controller')

routes.get("/getProveedores", getAllProveedores);

routes.post("/saveProveedor", saveProveedor);

module.exports = routes;
