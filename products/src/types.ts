export interface Product {
  productId: number
  color: string
  model: string
  brand: string
  carYear: number
  material: string
  amount: number
  price: number
  type: string
  scale: number
  secondHand: string
}

export type NewProduct = Omit<Product, 'productId'>
