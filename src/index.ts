import express from 'express'
import cors from 'cors'

import productRoutes from './routes/products'

const app = express()

const allowedOrigins = ['http://localhost:4200']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))

app.use(express.json())

const PORT = 5000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here' + ' ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
