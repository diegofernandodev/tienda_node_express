const { Router } = require("express");
const router = Router();
const {
  obtenerFacturaPorId,
  obtenerFacturas,
  modificarFacturaPorId,
  eliminarFacturaPorId,
  guardarFactura,
} = require("../controllers/ventas.controller");

router.get("/", (req, res) => {
  res.send("Bienvenidos");
});

// Ruta para obtener todas las facturas
router.get("/obtenerTodasLasFacturas", obtenerFacturas);

// Ruta para obtener una factura por su ID
router.get("/obtenerFactura/:id", obtenerFacturaPorId);

// Ruta para modificar una factura por su ID
router.put("/modificarFactura/:id", modificarFacturaPorId);

// Ruta para eliminar una factura por su ID
router.delete("/eliminarFactura/:id", eliminarFacturaPorId);

// Ruta para guardar una nueva factura
router.post("/guardarFactura", guardarFactura);

module.exports = router;
