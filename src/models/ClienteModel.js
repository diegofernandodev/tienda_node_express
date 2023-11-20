const { Schema, model, SchemaType } = require("mongoose");

const clienteSchema = new Schema({
  nameliente: {
    type: String,
    required: [true, "Nombre del cliente es requerido"],
    validate: {
      validator: (value) => {
        return typeof value === "string";
      },
      message: "El nombre del cliente debe ser una cadena de texto",
    },    
  },
  nit: {
    type: String,
    required: [true, "Nit requerido"],
    validate: {
      validator: (value) => {
        return typeof value === "string";
      },
      message: "EL nit debe ser una cadena de texto",
    },    
  },  
  direccionCliente: {
    type: String,
    required: [true, "Direccion requerida"],
    validate: {
      validator: (value) => {
        return typeof value === "string";
      },
      message: "La direccion debe ser una cadena de texto",
    },    
  },
  telefonoCliente: {
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

module.exports = model("cliente", clienteSchema, "Clientes");
