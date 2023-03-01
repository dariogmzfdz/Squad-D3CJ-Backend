import { NewUser, NewProduct } from '../types'

const parseUsername = (inputUsername: any): string => {
  if (!isString(inputUsername)) {
    throw new Error('Nombre de usuario incorrecto o no presente')
  }
  return inputUsername
}
const parsePassword = (inputPassword: any): string => {
  if (!isString(inputPassword)) {
    throw new Error('Contraseña incorrecta o no presente')
  }
  return inputPassword
}
const parseEmail = (inputEmail: any): string => {
  if (!isString(inputEmail)) {
    throw new Error('Email incorrecto o no presente')
  }
  return inputEmail
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseInputUser = (object: any): NewUser => {
  const newUser: NewUser = {
    username: parseUsername(object.username),
    password: parsePassword(object.password),
    /* role: parseRole(object.role), */
    email: parseEmail(object.email)
  }

  return newUser
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

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const parseInputLogin = (object: any): NewUser => {
  const newUser: NewUser = {
    email: parseUsername(object.email),
    password: parsePassword(object.password)
  }

  return newUser
}

const parseInputProduct = (object: any): NewProduct => {
  const newProduct: NewProduct = {
    color: parseColor(object.color),
    model: parseModel(object.model),
    brand: parseBrand(object.brand),
    carYear: parseCarYear(object.carYear),
    material: parseMaterial(object.material),
    amount: parseAmount(object.amount),
    price: parsePrice(object.price)
  }

  return newProduct
}

export {
  parseInputUser,
  parseInputLogin,
  parseInputProduct
}
