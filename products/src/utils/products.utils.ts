import { Images } from './../data/model/images.model';
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

const parseImages = (inputImages: any): Images[] => {
  if (!isFile(inputImages)) {
    throw new Error('Imagenes incorrectas o no presentes')
  }
  return inputImages
}

const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const isFile = (file: File): boolean => {
  return typeof file === 'object'
}

const parseInputProduct = (object: any): NewProduct => {
  const newProduct: NewProduct = {
    productId: object.productId,
    color: parseColor(object.color),
    model: parseModel(object.model),
    brand: parseBrand(object.brand),
    carYear: parseCarYear(object.carYear),
    material: parseMaterial(object.material),
    type: parseType(object.type),
    scale: parseScale(object.scale),
    images: parseImages(object.images)
  }

  return newProduct
}

export {
  parseInputProduct
}
