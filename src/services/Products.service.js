const productModel = require("../models/ProductModel");

const getAllProducts = async () => {
  return await productModel.find();
};



module.exports = { getAllProducts };
