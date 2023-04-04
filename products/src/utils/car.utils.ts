import { NewCar } from '../types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const isBoolean = (boolean: boolean): boolean => {
    return typeof boolean === 'boolean'
}

const parseUserId = (inputUserId: any): string => {
    if (!isString(inputUserId)) {
        throw new Error('Id de usuario incorrecto o no presente')
    }
    return inputUserId
}

const parseProductId = (inputProductId: any): string => {
    if (!isString(inputProductId)) {
        throw new Error('Id de producto incorrecto o no presente')
    }
    return inputProductId
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

const parseSecondHand = (inputSecondHand: any): string => {
  if (!isString(inputSecondHand) && inputSecondHand != null) {
    throw new Error('Segunda mano incorrecta o no presente')
  }
  return inputSecondHand
}

const parseDescription = (inputDescription: any): string => {
  if (!isString(inputDescription)) {
    throw new Error('Descripción incorrecta o no presente')
  }
  return inputDescription
}

const parseIsAdmin = (inputIsAdmin: any): boolean => {
    if (!isBoolean(inputIsAdmin)) {
        throw new Error('Booleano incorrecto o no presente')
    }
    return inputIsAdmin
}

const parseInputCar = (object: any): NewCar => {
  const newCar: NewCar = {
    userId: parseUserId(object.userId),
    productId: parseProductId(object.productId),
    amount: parseAmount(object.amount),
    price: parsePrice(object.price),
    description: parseDescription(object.description),
    secondHand: parseSecondHand(object.secondHand),
    isAdmin: parseIsAdmin(object.isAdmin)
  }

  return newCar
}

export {
    parseInputCar
}
