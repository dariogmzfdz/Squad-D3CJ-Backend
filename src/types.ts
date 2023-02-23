export enum UserRole {
  Admin = 'admin',
  Worker = 'worker',
  Guest = 'guest'
}

export interface User {
  userId: number
  username?: string
  password: string
  role: UserRole
  email: string
}

export type UserSinPassword = Omit<User, 'password'>
export type NewUser = Omit<User, 'userId' | 'role'>

export interface Product {
  productId: number
  color: string
  model: string
  brand: string
  carYear: number
  material: string
  amount: number
  price: number
}

export type NewProduct = Omit<Product, 'productId'>
