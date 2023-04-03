import { NewProduct, Product, NewCar, Cars } from '../types'
import { Products as DBProducts } from '../data/model/product.model'
import { Cars as DBCar } from '../data/model/car.model'
import { ProductRepository } from '../data/repositories/product.repository'

export class ProductService {
  private productRepository: ProductRepository

  constructor() {
    this.productRepository = new ProductRepository()
  }

  async getAllAdminProducts(): Promise<Product[]> {
    const products = await this.productRepository
      .getAllAdminProducts()
      .then((products) => {
        let filteredProducts = []
        products.forEach((product) => {
          console.log("DataValues:::", product.dataValues)
          const filteredCars = product.dataValues.cars.filter(
            (car) => car.dataValues.userId == 'a97903b5-117b-4e24-894e-66215f6757c5'
          )
          if(filteredCars.length > 0) {
            product.cars = filteredCars
            filteredProducts.push(product)
          }
        })
        console.log('filteredProducts:::', filteredProducts);
        
        return filteredProducts
      })
    return products
  }

  async getAllUsersProducts(): Promise<Product[]> {
    const products = await this.productRepository.getAllUsersProducts().then((products) => {
      let filteredProducts = []
      products.forEach((product) => {
        console.log("DataValues:::", product.dataValues)
        const filteredCars = product.dataValues.cars.filter(
          (car) => car.dataValues.userId != 'a97903b5-117b-4e24-894e-66215f6757c5'
        )
        if(filteredCars.length > 0) {
          product.cars = filteredCars
          filteredProducts.push(product)
        }
      })
      console.log('filteredProducts:::', filteredProducts);

      return filteredProducts
    })
    return products
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.getProductById(id)
    return product
  }

  async addProduct(product: NewProduct): Promise<Product> {
    const newProduct = await this.productRepository.addProduct(product)
    return newProduct
  }

  async addCar(product: Product, car: NewCar): Promise<Cars> {
    const newCar = await this.productRepository.addCar(product, car)
    return newCar
  }

  async updateProduct(id: string, product: NewProduct): Promise<Product> {
    const updatedProduct = await this.productRepository.updateProduct(
      id,
      product
    )
    return updatedProduct
  }

  async deleteProduct(id: string): Promise<Product> {
    const deletedProduct = await this.productRepository.deleteProduct(id)
    return deletedProduct
  }
}

export const mapProductResult = (product: DBProducts, car: DBCar): Product => {
  const returnProduct = {
    productId: product.productId,
    color: product.color,
    model: product.model,
    brand: product.brand,
    carYear: product.carYear,
    material: product.material,
    amount: car.amount,
    price: car.price,
    type: product.type,
    scale: product.scale,
    secondHand: car.secondHand,
    images: product.images,
  }

  return returnProduct
}
