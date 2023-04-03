import { SaleService } from '../services/sales.service'
/* import { parseInputSale } from '../utils/sales.utils' */

const saleService: SaleService = new SaleService()

export const salesController = {
  getAllSales: (_req: any, res: any) => {
    saleService.getAllSales().then(result => {
      res.json(result)
    }).catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
  },
  getSaleById: (req: any, res: any) => {
    saleService.getSaleById(req.params.id).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  addSale: (req: any, res: any) => {
    try {
      /* const inputSale = parseInputSale(req.body) */
      saleService.addSale(req.body).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  },
  updateSales: (req: any, res: any) => {
    saleService.updateSale(req.params.id, req.body).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  }
}
