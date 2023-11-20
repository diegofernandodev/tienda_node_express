const express = require("express");
const productsRoutes = require("../routes/Products.routes");
const proveedoresRoutes = require("../routes/Proveedores.routes");
const clientesRoutes = require("../routes/Clientes.routes");
const ventasRoutes = require("../routes/ventas.routes")



const app = express();
const port = 3000;

app.use(express.json());
app.use(productsRoutes);
app.use(proveedoresRoutes);
app.use(clientesRoutes);
app.use(ventasRoutes);

app.set("port", process.env.PORT || port);

module.exports = app;
