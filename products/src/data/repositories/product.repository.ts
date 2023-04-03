import { connect } from '../config/product.db.config'
import { NewProduct, NewCar, Product } from '../../types'
import { Products as DBProducts } from '../model/product.model'
import { Images as DBImages } from '../model/images.model'
import { Cars as DBCars } from '../model/car.model'
import { v4 as uuid } from 'uuid'

export class ProductRepository {
  private db: any
  private productRepository: any
  private carRepository: any
  private imageRepository: any

  constructor() {
    this.db = connect()
    this.productRepository = this.db.sequelize.getRepository(DBProducts)
    this.carRepository = this.db.sequelize.getRepository(DBCars)
    this.imageRepository = this.db.sequelize.getRepository(DBImages)
  }

  async getAllAdminProducts(): Promise<DBProducts[]> {
    try {
      const Products = await this.productRepository.findAll({
        include: [this.carRepository, this.imageRepository],
      })
      console.log('products:::', Products)

      return Products
    } catch (err) {
      console.error('An error occurred when retrieving products.')
      console.error(err)

      return []
    }
  }

  async getAllUsersProducts(): Promise<DBProducts[]> {
    try {
      const Products = await this.productRepository.findAll({
        include: [this.carRepository, this.imageRepository],
      })
      console.log('products:::', Products)

      return Products
    } catch (err) {
      console.error('An error occurred when retrieving products.')
      console.error(err)

      return []
    }
  }

  async getProductById(id: string): Promise<DBProducts> {
    let data: DBProducts = {} as DBProducts
    try {
      data = await this.productRepository.findByPk(id, {
        include: [this.carRepository],
      })
      console.log('products:::', data)
    } catch (err) {
      console.error('An error occurred when retrieving the product.')
      console.error(err)
    }
    return data
  }

  async addProduct(product: NewProduct): Promise<DBProducts> {
    let data: DBProducts = product as DBProducts
    try {
      console.log('product:::', product)
      data = await this.productRepository.create(product, {
        include: [this.imageRepository],
      })
    } catch (err) {
      console.error('An error occurred when adding the product.')
      console.error(err)
    }
    return data
  }

  async addCar(product: Product, car: NewCar): Promise<DBCars> {
    let data : DBCars = car as DBCars
    console.log(data);
    data.carId = uuid()
    
    try {
      let productIdExist = this.productRepository.findOne({
        where: { productId: product.productId },
      })
      car.secondHand = car.isAdmin ? 'N' : 'S'
      if (productIdExist) {
        car.product = product
        car.productId = productIdExist.productId
        data = await this.carRepository.create(car, { include : this.productRepository})
      } else {
        this.addProduct(product).then((dbProduct) => {
          car.product = dbProduct
          car.productId = product.productId
          data = this.carRepository.create(car, {
            include: this.productRepository,
          })
        })
      }
    } catch (err) {
      console.error('An error occurred when adding the car.')
      console.error(err)
    }
    return data
  }

  async updateProduct(id: string, product: NewProduct): Promise<DBProducts> {
    let data: DBProducts = product as DBProducts
    try {
      data = await this.productRepository.update(product, {
        where: { productId: id },
      })
    } catch (err) {
      console.error('An error occurred when updating the product.')
      console.error(err)
    }
    return data
  }

  async deleteProduct(id: string): Promise<DBProducts> {
    let data: DBProducts = {} as DBProducts
    try {
      data = await this.productRepository.destroy({ where: { productId: id } })
    } catch (err) {
      console.error('An error occurred when deleting the product.')
      console.error(err)
    }
    return data
  }

  async getProductsByCategory(category: string): Promise<DBProducts[]> {
    let data: DBProducts[] = [] as DBProducts[]
    try {
      data = await this.productRepository.findAll({
        where: { category: category },
      })
    } catch (err) {
      console.error(
        'An error occurred when retrieving the products by category.'
      )
      console.error(err)
    }
    return data
  }
}
