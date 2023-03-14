/* eslint-disable import/first */
import express from 'express'
require('dotenv').config()
const app = express()
const cookieParser = require('cookie-parser')

import cors from 'cors'
import userRouter from './routes/user.route'
import productRouter from './routes/product.route'
app.use(express.json())

const allowedOrigins = ['http://localhost:4200']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))
app.use(cookieParser())

app.get('/ping', (_req, res) => {
  console.log('someone pinged here' + ' ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
