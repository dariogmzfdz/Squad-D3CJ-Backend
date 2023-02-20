export interface ProductEntry {
  id: number
  name: string
  price: number
}

export type NewProductEntry = Omit<ProductEntry, 'id'>
