const createProduct = require('../models/productModel')
const productController = {}

productController.createProduct = (request, response) => {
    const { product } = request.body
    createProduct.createProduct(product, (err, res) => {
        if (err) {
            return response.status(500).json({
                ok: false,
                message: 'Ha ocurrido un error ',
                err
            })
        }
        return response.status(500).json({
            ok: true,
            message: 'producto creado correctamente',
            product: product
        })
    })
}

productController.updateProduct = (request, response) => {

}

module.exports = productController
