const { Schema, model, SchemaType } = require("mongoose");

const proveedorSchema = new Schema({
  nameProveedor: {
    type: String,
    required: [true, "Nombre del proveedor es requerido"],
    validate: {
      validator: (value) => {
        return typeof value === "string";
      },
      message: "El nombre del proveedor debe ser una cadena de texto",
    },    
  },
  nit: {
    type: String,
    required: [true, "Nit requerido"],
    validate: {
      validator: (value) => {
        return typeof value === "String";
      },
      message: "EL nit debe ser una cadena de texto",
    },    
  },  
  direccionProveedor: {
    type: String,
    required: [true, "Direccion requerida"],
    validate: {
      validator: (value) => {
        return typeof value === "string";
      },
      message: "La direccion debe ser una cadena de texto",
    },    
  },
  telefonoProveedor: {
    type: String,
    required: [true, "Telefono requerida"],
    validate: {
      validator: (value) => {
        return typeof value === "string";
      },
      message: "El telefono debe ser una cadena de texto",
    },    
  },
});

module.exports = model("proveedor", proveedorSchema, "Proveedores");
