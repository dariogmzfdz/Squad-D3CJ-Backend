import { NewProductEntry } from './types'

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }

  return nameFromRequest
}

const isNumber = (num: any): num is number => {
  return typeof num === 'number' || num instanceof Number
}

const parsePrice = (price: any): number => {
  if (!isNumber(price)) {
    throw new Error('Incorrect or missing price')
  }

  return price
}

const toNewProductEntry = (object: any): NewProductEntry => {
  const newEntry: NewProductEntry = {
    name: parseName(object.name),
    price: parsePrice(object.price)
  }

  return newEntry
}

export default toNewProductEntry
