const { Schema, model, SchemaType } = require("mongoose");
// const Schema = mongoose.Schema;

const facturaSchema = new Schema({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'cliente', 
    required: [true, 'El cliente es requerido'],
  },
  productos: [{
    cantidad: {
      type: Number,
      required: [true, 'La cantidad es requerida'],
    },
    producto: {
      type: Schema.Types.ObjectId,
      ref: 'product', 
      required: [true, 'El producto es requerido'],
    },
    precioUnitario: {
      type: Number,
      required: [true, 'El precio unitario es requerido'],
    },
  }],
  precioTotal: {
    type: Number,
    default: 0,
  },
});


module.exports = model('factura', facturaSchema, "facturas");
