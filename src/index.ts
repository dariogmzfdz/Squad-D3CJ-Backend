/* eslint-disable import/first */
import express from 'express'
require('dotenv').config()
const app = express()
const cookieParser = require('cookie-parser')

import cors from 'cors'
import axios from 'axios'
import userRouter from './routes/user.route'
app.use(express.json())

const allowedOrigins = ['http://localhost:62243']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))
app.use(cookieParser())

app.get('/ping', (_req, res) => {
  console.log('someone pinged here' + ' ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.get('/users', (_req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => res.json(response.data))
    .catch(err => {
      console.error('An error occurred when retrieving users.')
      console.error(err)
      res.sendStatus(500)
    })
})

app.get('/users/count', (_req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.data != null && response.data.length > 0) {
        res.json(response.data.length)
      } else {
        res.json(0)
      }
    })
    .catch(err => {
      console.error('An error occurred when retrieving the number of users.')
      console.error(err)
      res.sendStatus(500)
    })
})

app.get('/users/:id', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.data != null && response.data.length > 0) {
        res.json(response.data.filter((user: { id: string }) => user.id === req.params.id))
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => {
      console.error('An error occurred while retrieving the user.')
      console.error(err)
      res.sendStatus(500)
    })
})

app.use('/api/users', userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
