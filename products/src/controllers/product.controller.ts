import { ProductService } from '../services/product.service'
import { parseInputProduct } from '../utils/products.utils'
import { parseInputCar } from '../utils/car.utils'

const productService: ProductService = new ProductService()

export const productController = {
  getAllAdminProducts: (_req: any, res: any) => {
    productService.getAllAdminProducts().then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  getAllUsersProducts: (_req: any, res: any) => {
    productService.getAllUsersProducts().then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  getProductById: (req: any, res: any) => {
    productService.getProductById(req.params.id).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  addProduct: (req: any, res: any) => {
    try {
      const inputProduct = parseInputProduct(req.body)
      productService.addProduct(inputProduct).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  },
  addCar: (req: any, res: any) => {
    try {
      console.log(req.body.cars[0]);

      const inputProduct = parseInputProduct(req.body)
      const inputCar = parseInputCar(req.body.cars[0])
      productService.addCar(inputProduct, inputCar).then(result => {
        res.json(result)
      })
    } catch (e) {
      console.error(e)
      res.sendStatus(400)
    }
  },
  deleteProduct: (req: any, res: any) => {
    productService.deleteProduct(req.params.id).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  updateProduct: (req: any, res: any) => {
    productService.updateProduct(req.params.id, req.body).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  /* uploadImage: (req: any, res: any) => {
    productService.uploadImage(+req.params.id, req.file).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  } */
}
