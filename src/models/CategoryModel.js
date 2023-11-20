const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nombre de la categoria es requerida"],
  },
  
  description: {
    type: String,
    required: [true, "Descripcion de la categoria es requerida"],
    minLenght: [10, "La descripcion debe tener al menos 10 caracteres"],
    maxLenght: [200, "La descripcion no debe tener mas de 200 caracteres"],
    
  },
  // image: {
  //   type: String,
  //   required: [true, "Imagen de la categoria es requerida"],
  // },
});

module.exports = model("categoria", productSchema, "categorias");
