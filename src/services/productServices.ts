import { NewProductEntry, ProductEntry } from '../types'
import productData from './products.json'

const products: ProductEntry[] = productData as unknown as ProductEntry[]

export const getEntries = (): ProductEntry[] => products

export const findById = (id: number): ProductEntry | undefined => {
  const entry = products.find(d => d.id === id)
  return entry
}

export const addEntry = (newProductEntry: NewProductEntry): ProductEntry => {
  const newEntry = {
    id: Math.max(...products.map(p => p.id)) + 1,
    ...newProductEntry
  }

  products.push(newEntry)
  return newEntry
}
