const {
    obtenerFacturaPorId,
    obtenerFacturas,
    guardarFactura,
    eliminarFacturaPorId,
    modificarFacturaPorId,
  } = require("../services/ventas.service");
  const { ResponseStructure } = require("../helpers/ResponseStructure");
  
  const facturasController = {};
  
  facturasController.obtenerFacturaPorId = async (req, res) => {
    try {
      const facturaId = req.params.id;
      const factura = await obtenerFacturaPorId(facturaId);
     
      ResponseStructure.status = 200;
      ResponseStructure.message = "Factura encontrada exitosamente";
      ResponseStructure.data = factura;
      
      res.status(200).json(ResponseStructure);
    } catch (error) {
      console.error("Error al obtener la factura:", error);
  
      ResponseStructure.status = 404;
      ResponseStructure.message = "Factura no encontrada";
      ResponseStructure.data = null;
  
      res.status(404).json(ResponseStructure);
    }
  };
  
  facturasController.obtenerFacturas = async (req, res) => {
    try {
      const listaFacturas = await obtenerFacturas();
      ResponseStructure.message = "Facturas encontradas exitosamente";
      ResponseStructure.data = listaFacturas;
      res.status(200).send(ResponseStructure);
    } catch (error) {
      const errorsCatch = error.errors;
      const errors = {};
  
      for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al obtener facturas";
      ResponseStructure.data = errors;
      
      res.status(500).json(ResponseStructure);
    }
  };
  
  facturasController.guardarFactura = async (req, res) => {
    try {
      const nuevaFactura = {
        ...req.body,
        cliente: req.body.cliente,
        // Asegúrate de que el campo 'productos' esté presente en el cuerpo de la solicitud
      };
  
      await guardarFactura(nuevaFactura);
      ResponseStructure.status = 200;
      ResponseStructure.message = "Factura guardada exitosamente";
      ResponseStructure.data = nuevaFactura;
  
      res.status(200).send(ResponseStructure);
    } catch (error) {
      const errorsCatch = error.errors;
      const errors = {};
  
      for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al guardar la factura";
      ResponseStructure.data = errors;
      
      res.status(500).json(ResponseStructure);
    }
  };
  
  facturasController.eliminarFacturaPorId = async (req, res) => {
    try {
      const facturaEliminada = await eliminarFacturaPorId(req.params.id);
      ResponseStructure.status = 200;
      ResponseStructure.message = "Factura eliminada exitosamente";
      ResponseStructure.data = facturaEliminada;
  
      res.status(200).send(ResponseStructure);
    } catch (error) {
      const errorsCatch = error.errors;
      const errors = {};
  
      for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al eliminar la factura";
      ResponseStructure.data = errors;
      
      res.status(500).json(ResponseStructure);
    }
  };
  
  facturasController.modificarFacturaPorId = async (req, res) => {
    try {
      const nuevosDatos = req.body;
      const facturaModificada = await modificarFacturaPorId(req.params.id, nuevosDatos);
      ResponseStructure.status = 200;
      ResponseStructure.message = "Factura modificada exitosamente";
      ResponseStructure.data = facturaModificada;
  
      res.status(200).send(ResponseStructure);
    } catch (error) {
      const errorsCatch = error.errors;
      const errors = {};
  
      for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      ResponseStructure.status = 400;
      ResponseStructure.message = "Error al modificar la factura";
      ResponseStructure.data = errors;
      
      res.status(400).json(ResponseStructure);
    }
  };
  
  module.exports = facturasController;
  