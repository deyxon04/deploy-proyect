const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/productController')

router.route('/')
  .post(productController.createProduct)
  .put(productController.updateProduct)

module.exports = router
