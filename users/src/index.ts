import express from 'express'
import cors from 'cors'
require('dotenv').config()
import userRouter from './routes/user.route'

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

app.use('/api/users', userRouter)

app.listen(process.env.USER_PORT, () => {
  console.log(`Server running on port ${process.env.USER_PORT}`)
})
