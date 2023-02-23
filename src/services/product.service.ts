import { NewProduct, Product } from '../types'
import { Products as DBProducts } from '../data/model/product.model'
import { ProductRepository } from '../data/repository/product.repository'

export class ProductService {
  private productRepository: ProductRepository

  constructor () {
    this.productRepository = new ProductRepository()
  }

  async getAllProducts (): Promise<Product[]> {
    const products = await this.productRepository.getAllProducts()
    return products
  }

  async getProductById (id: number): Promise<Product> {
    const product = await this.productRepository.getProductById(id)
    return product
  }

  async addProduct (product: NewProduct): Promise<Product> {
    const newProduct = await this.productRepository.addProduct(product)
    return newProduct
  }

  async updateProduct (id: number, product: NewProduct): Promise<Product> {
    const updatedProduct = await this.productRepository.updateProduct(id, product)
    return updatedProduct
  }

  async deleteProduct (id: number): Promise<Product> {
    const deletedProduct = await this.productRepository.deleteProduct(id)
    return deletedProduct
  }
}

export const mapProductResult = (product: DBProducts): Product => {
  const returnProduct = {
    productId: product.productId,
    color: product.color,
    model: product.model,
    brand: product.brand,
    carYear: product.carYear,
    material: product.material,
    amount: product.amount,
    price: product.price
  }

  return returnProduct
}
