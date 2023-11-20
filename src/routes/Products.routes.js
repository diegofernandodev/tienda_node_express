const { Router } = require("express");
const routes = Router();
const { getAllProducts, saveProduct } = require('../controllers/Products.controller')

routes.get("/getProducts", getAllProducts);

routes.post("/saveProduct", saveProduct);

module.exports = routes;
