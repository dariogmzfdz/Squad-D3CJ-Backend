import express from 'express'
import { productController } from '../controllers/product.controller'

const productRouter = express.Router()

productRouter.get('/all', productController.getAllAdminProducts)

productRouter.get('/allUsers', productController.getAllUsersProducts)

productRouter.get('/:id', productController.getProductById)

productRouter.post('/add', productController.addCar)

productRouter.delete('/:id', productController.deleteProduct)

productRouter.put('/:id', productController.updateProduct)

export default productRouter

module.exports = productRouter
