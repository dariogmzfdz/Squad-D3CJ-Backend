import { connect } from '../config/sale.db.config'
import { NewSale } from '../../types'
import { Sales as DBSales } from '../model/sale.model'

export class SaleRepository {
  private db: any
  private saleRepository: any

  constructor () {
    this.db = connect()
    this.saleRepository = this.db.sequelize.getRepository(DBSales)
  }

  async getAllSales (): Promise<DBSales[]> {
    try {
      const Sales = await this.saleRepository.findAll()
      console.log('sales:::', Sales)

      return Sales
    } catch (err) {
      console.error('An error occurred when retrieving sales.')
      console.error(err)

      return []
    }
  }

  async getSaleById (id: number): Promise<DBSales> {
    let data: DBSales = {} as DBSales
    try {
      data = await this.saleRepository.findByPk(id)
      console.log('sales:::', data)
    } catch (err) {
      console.error('An error occurred when retrieving the sale.')
      console.error(err)
    }
    return data
  }

  async addSale (sale: NewSale): Promise<DBSales> {
    let data: DBSales = sale as DBSales
    try {
      data = await this.saleRepository.create(sale)
    } catch (err) {
      console.error('An error occurred when adding the sale.')
      console.error(err)
    }
    return data
  }

  async updateSale (id: number, sale: NewSale): Promise<DBSales> {
    let data: DBSales = sale as DBSales
    try {
      data = await this.saleRepository.update(sale, { where: { saleId: id } })
    } catch (err) {
      console.error('An error occurred when updating the sale.')
      console.error(err)
    }
    return data
  }

  async deleteSale (id: number): Promise<DBSales> {
    let data: DBSales = {} as DBSales
    try {
      data = await this.saleRepository.destroy({ where: { saleId: id } })
    } catch (err) {
      console.error('An error occurred when deleting the sale.')
      console.error(err)
    }
    return data
  }

  async getSalesByCategory (category: string): Promise<DBSales[]> {
    let data: DBSales[] = [] as DBSales[]
    try {
      data = await this.saleRepository.findAll({ where: { category: category } })
    } catch (err) {
      console.error('An error occurred when retrieving the sales by category.')
      console.error(err)
    }
    return data
  }
}
