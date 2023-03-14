import express from 'express'
import { productController } from '../controllers/product.controller'

const productRouter = express.Router()

productRouter.get('/', productController.getAllProducts)

productRouter.get('/:id', productController.getProductById)

productRouter.post('/', productController.addProduct)

productRouter.delete('/:id', productController.deleteProduct)

productRouter.put('/:id', productController.updateProduct)

export default productRouter

module.exports = productRouter
