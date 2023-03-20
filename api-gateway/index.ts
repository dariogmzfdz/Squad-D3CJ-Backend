import express from 'express'
import cors from 'cors'
import router from './router'

require('dotenv').config()

const app = express()
app.use(express.json())

const allowedOrigins = ['http://localhost:4200']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))

app.use('/*', router) 

app.get('/ping', (_req, res) => {
  console.log('someone pinged here' + ' ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
