export interface Product {
  productId?: string
  brand: string
  model: string
  color: string
  carYear: number
  material: string
  scale: number
  type: string
  images: Images[]
  cars?: Cars[]
}

export type NewProduct = Product

export interface Cars {
  carId?: string
  userId: string
  productId: string
  description: string
  amount: number
  price: number
  secondHand?: string
  isAdmin?: boolean,
  product?: Product
}

export type NewCar = Cars

export interface Images {
  imageId?: string
  productId?: string
  path: string
}