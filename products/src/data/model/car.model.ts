import { STRING } from "sequelize";
import { Table, Column, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Products } from "./product.model";

@Table({
  freezeTableName: true,
  tableName: 'cars',
  timestamps: false,
})
export class Cars extends Model {
  @Column({
    type: STRING,
    primaryKey: true,
  })
  carId?: string

  @Column({
    type: STRING,
  })
  userId!: string

  @ForeignKey(() => Products)
  @Column({
    type: STRING,
  })
  productId!: string

  @Column({
    type: STRING,
  })
  amount!: number

  @Column({
    type: STRING,
  })
  price!: number

  @Column({
    type: STRING,
  })
  description!: string

  @Column({
    type: STRING,
  })
  secondHand!: string

  isAdmin!: boolean

  @BelongsTo(() => Products)
    product?: Products
}