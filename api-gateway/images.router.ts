import express from 'express'
import { apiGatewayController } from './api-gateway.controller'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/*', upload.array('images', 10), apiGatewayController.redirectImages)

export default router

module.exports = router
