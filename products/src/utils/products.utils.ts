import { NewProduct } from '../types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseColor = (inputColor: any): string => {
  if (!isString(inputColor)) {
    throw new Error('Color incorrecto o no presente')
  }
  return inputColor
}

const parseModel = (inputModel: any): string => {
  if (!isString(inputModel)) {
    throw new Error('Modelo incorrecto o no presente')
  }
  return inputModel
}

const parseBrand = (inputBrand: any): string => {
  if (!isString(inputBrand)) {
    throw new Error('Marca incorrecta o no presente')
  }
  return inputBrand
}

const parseCarYear = (inputCarYear: any): number => {
  if (!isNumber(inputCarYear)) {
    throw new Error('Año incorrecto o no presente')
  }
  return inputCarYear
}

const parseMaterial = (inputMaterial: any): string => {
  if (!isString(inputMaterial)) {
    throw new Error('Material incorrecto o no presente')
  }
  return inputMaterial
}

const parseAmount = (inputAmount: any): number => {
  if (!isNumber(inputAmount)) {
    throw new Error('Cantidad incorrecta o no presente')
  }
  return inputAmount
}

const parsePrice = (inputPrice: any): number => {
  if (!isNumber(inputPrice)) {
    throw new Error('Precio incorrecto o no presente')
  }
  return inputPrice
}

const parseType = (inputType: any): string => {
  if (!isString(inputType)) {
    throw new Error('Tipo incorrecto o no presente')
  }
  return inputType
}

const parseScale = (inputScale: any): number => {
  if (!isNumber(inputScale)) {
    throw new Error('Escala incorrecta o no presente')
  }
  return inputScale
}

const parseSecondHand = (inputSecondHand: any): string => {
  if (!isString(inputSecondHand)) {
    throw new Error('Segunda mano incorrecta o no presente')
  }
  return inputSecondHand
}

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const parseInputProduct = (object: any): NewProduct => {
  const newProduct: NewProduct = {
    color: parseColor(object.color),
    model: parseModel(object.model),
    brand: parseBrand(object.brand),
    carYear: parseCarYear(object.carYear),
    material: parseMaterial(object.material),
    amount: parseAmount(object.amount),
    price: parsePrice(object.price),
    type: parseType(object.type),
    scale: parseScale(object.scale),
    secondHand: parseSecondHand(object.secondHand)
  }

  return newProduct
}

export {
  parseInputProduct
}
