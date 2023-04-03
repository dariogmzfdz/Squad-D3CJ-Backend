import { STRING } from 'sequelize'
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  freezeTableName: true,
  tableName: 'sales',
  timestamps: false
})
export class Sales extends Model {
  @Column({
    type: STRING
  })
    saleId!: string

  @Column({
    type: STRING
  })
    productId!: string

  @Column({
    type: STRING
  })
    invoiceId!: string
}
