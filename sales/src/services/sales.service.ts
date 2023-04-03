import { NewSale, Sale } from '../types'
import { Sales as DBSales } from '../data/model/sale.model'
import { SaleRepository } from '../data/repositories/sale.repository'

export class SaleService {
  private saleRepository: SaleRepository

  constructor () {
    this.saleRepository = new SaleRepository()
  }

  async getAllSales (): Promise<Sale[]> {
    const sales = await this.saleRepository.getAllSales()
    return sales
  }

  async getSaleById (id: number): Promise<Sale> {
    const sale = await this.saleRepository.getSaleById(id)
    return sale
  }

  async addSale (sale: NewSale): Promise<Sale> {
    const newSale = await this.saleRepository.addSale(sale)
    return newSale
  }

  async updateSale (id: number, sale: NewSale): Promise<Sale> {
    const updatedSale = await this.saleRepository.updateSale(id, sale)
    return updatedSale
  }

  async deleteSale (id: number): Promise<Sale> {
    const deletedSale = await this.saleRepository.deleteSale(id)
    return deletedSale
  }
}

export const mapSaleResult = (sale: DBSales): Sale => {
  const returnSale = {
    saleId: sale.saleId,
    productId: sale.productId,
    invoiceId: sale.invoiceId
  }

  return returnSale
}
