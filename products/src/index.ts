import express from 'express'
import cors from 'cors'
require('dotenv').config()
import productRouter from './routes/product.route'

const app = express()
app.use(express.json())

const allowedOrigins = ['http://localhost:4200', 'http://localhost:5000']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))

app.get('/ping', (_req, res) => {
  console.log('someone pinged here' + ' ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/products', productRouter)

app.listen(process.env.PRODUCT_PORT, () => {
  console.log(`Server running on port ${process.env.PRODUCT_PORT}`)
})
