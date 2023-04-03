import { STRING } from 'sequelize'
import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { Images } from './images.model'
import { Cars } from './car.model'

@Table({
  freezeTableName: true,
  tableName: 'Product',
  timestamps: false
})
export class Products extends Model {
  @Column({
    type: STRING,
    primaryKey: true,
  })
    productId!: string

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
    field: 'type'
  })
    type!: string

  @Column({
    field: 'scale'
  })
    scale!: number

  @HasMany(() => Images)
    images!: Images[]

  @HasMany(() => Cars)
    cars!: Cars[]
}
