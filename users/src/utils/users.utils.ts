import { NewUser } from '../types'

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

const parseBoolean = (inputBoolean: any): string => {
  if (!isBoolean(inputBoolean)) {
    throw new Error('Booleano incorrecto o no presente')
  }
  return inputBoolean ? 'active' : 'inactive'
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isBoolean = (boolean: boolean): boolean => {
  return typeof boolean === 'boolean'
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

const parseInputLogin = (object: any): NewUser => {
  const newUser: NewUser = {
    email: parseUsername(object.email),
    password: parsePassword(object.password)
  }

  return newUser
}

export {
  parseInputUser,
  parseInputLogin,
  parseBoolean
}
