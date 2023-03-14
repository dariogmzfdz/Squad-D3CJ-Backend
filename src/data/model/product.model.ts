import { INTEGER } from 'sequelize'
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  freezeTableName: true,
  tableName: 'Product',
  timestamps: false
})
export class Products extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: 'product id'
  })
    productId!: number

  @Column({
    field: 'color'
  })
    color!: string

  @Column({
    field: 'model'
  })
    model!: string

  @Column({
    field: 'brand'
  })
    brand!: string

  @Column({
    field: 'carYear'
  })
    carYear!: number

  @Column({
    field: 'material'
  })
    material!: string

  @Column({
    field: 'amount'
  })
    amount!: number

  @Column({
    field: 'price'
  })
    price!: number

  @Column({
    field: 'type'
  })
    type!: string

  @Column({
    field: 'scale'
  })
    scale!: number

  @Column({
    field: 'secondHand'
  })
    secondHand!: string
}
