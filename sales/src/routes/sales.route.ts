import express from 'express'
import { salesController } from '../controllers/sales.controller'

const salesRouter = express.Router()

salesRouter.get('/', salesController.getAllSales)

salesRouter.get('/:id', salesController.getSaleById)

salesRouter.post('/', salesController.addSale)

salesRouter.put('/:id', salesController.updateSales)

export default salesRouter

module.exports = salesRouter
