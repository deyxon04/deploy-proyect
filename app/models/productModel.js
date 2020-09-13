const db = require('../config/mysqlConnection')
const productModel = {}

productModel.createProduct = (product, callback) => {
  callback(null, product)
}

productModel.updateProduct = (productToCreate, callback) => {
  callback(null, productToCreate)
}

productModel.readProducts = (callback) => {
  callback(null, true)
}

productModel.readProduct = (id, callback) => {
  callback(null, id)
}

productModel.deleteProduct = (id, callback) => {
  callback(null, id)
}

module.exports = productModel
