const Factura = require("../models/VentaModel");
const Cliente = require("../models/ClienteModel"); 
const Producto = require("../models/ProductModel");

const obtenerFacturas = async () => {
  const facturas = await Factura.find().populate('cliente').populate({
    path: 'productos.producto',
    model: Producto,
  });
  return facturas;
};

const obtenerFacturaPorId = async (facturaId) => {
  const factura = await Factura.findById(facturaId).populate('cliente').populate({
    path: 'productos.producto',
    model: Producto,
  });
  return factura;
};

const guardarFactura = async (factura) => {
  let nuevaFactura = new Factura(factura);
  return await nuevaFactura.save();
};

const eliminarFacturaPorId = async (facturaId) => {
  return await Factura.findByIdAndRemove(facturaId);
};

const modificarFacturaPorId = async (facturaId, nuevosDatos) => {
  return await Factura.findByIdAndUpdate(facturaId, nuevosDatos, { new: true });
};

module.exports = {
  obtenerFacturas,
  obtenerFacturaPorId,
  guardarFactura,
  eliminarFacturaPorId,
  modificarFacturaPorId,
};
