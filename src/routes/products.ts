import express from 'express'
import * as productServices from '../services/productServices'
import toNewProductEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(productServices.getEntries())
})

router.get('/:id', (_req, res) => {
  const product = productServices.findById(Number(_req.params.id))

  return (product != null) ? res.send(product) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newProductEntry = toNewProductEntry(req.body)
    const addedEntry = productServices.addEntry(newProductEntry)
    res.json(addedEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
