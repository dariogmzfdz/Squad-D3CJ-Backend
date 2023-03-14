import { ProductService } from '../services/product.service'
import { parseInputProduct } from '../utils/utils'

const productService: ProductService = new ProductService()

export const productController = {
  getAllProducts: (_req: any, res: any) => {
    void productService.getAllProducts().then(result => {
      res.send(result)
    })
  },
  getProductById: (req: any, res: any) => {
    productService.getProductById(+req.params.id).then(result => {
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
  deleteProduct: (req: any, res: any) => {
    productService.deleteProduct(+req.params.id).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  updateProduct: (req: any, res: any) => {
    productService.updateProduct(+req.params.id, req.body).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  }
}
