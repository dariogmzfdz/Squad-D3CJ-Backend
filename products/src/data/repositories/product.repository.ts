import { connect } from '../config/product.db.config'
import { NewProduct } from '../../types'
import { Products as DBProducts } from '../model/product.model'

export class ProductRepository {
  private db: any
  private productRepository: any

  constructor () {
    this.db = connect()
    this.productRepository = this.db.sequelize.getRepository(DBProducts)
  }

  async getAllProducts (): Promise<DBProducts[]> {
    try {
      const Products = await this.productRepository.findAll()
      console.log('products:::', Products)

      return Products
    } catch (err) {
      console.error('An error occurred when retrieving products.')
      console.error(err)

      return []
    }
  }

  async getProductById (id: number): Promise<DBProducts> {
    let data: DBProducts = {} as DBProducts
    try {
      data = await this.productRepository.findByPk(id)
      console.log('products:::', data)
    } catch (err) {
      console.error('An error occurred when retrieving the product.')
      console.error(err)
    }
    return data
  }

  async addProduct (product: NewProduct): Promise<DBProducts> {
    let data: DBProducts = product as DBProducts
    try {
      data = await this.productRepository.create(product)
    } catch (err) {
      console.error('An error occurred when adding the product.')
      console.error(err)
    }
    return data
  }

  async updateProduct (id: number, product: NewProduct): Promise<DBProducts> {
    let data: DBProducts = product as DBProducts
    try {
      data = await this.productRepository.update(product, { where: { productId: id } })
    } catch (err) {
      console.error('An error occurred when updating the product.')
      console.error(err)
    }
    return data
  }

  async deleteProduct (id: number): Promise<DBProducts> {
    let data: DBProducts = {} as DBProducts
    try {
      data = await this.productRepository.destroy({ where: { productId: id } })
    } catch (err) {
      console.error('An error occurred when deleting the product.')
      console.error(err)
    }
    return data
  }

  async getProductsByCategory (category: string): Promise<DBProducts[]> {
    let data: DBProducts[] = [] as DBProducts[]
    try {
      data = await this.productRepository.findAll({ where: { category: category } })
    } catch (err) {
      console.error('An error occurred when retrieving the products by category.')
      console.error(err)
    }
    return data
  }
}
