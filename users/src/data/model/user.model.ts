import { INTEGER, STRING, DATE } from 'sequelize'
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  freezeTableName: true,
  tableName: 'Users'
})
export class Users extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
    userId!: number

  @Column({
    type: STRING
  })
    username!: string

  @Column({
    type: STRING
  })
    email!: string

  @Column({
    type: STRING
  })
    password!: string

  @Column({
    type: STRING,
    field: 'role_user'
  })
    role?: string

  @Column({
    type: STRING,
    values: ['active', 'inactive']
  })
    status?: string

  @Column({
    type: DATE
  })
    createdAt!: Date

  @Column({
    type: DATE
  })
    updatedAt!: Date
}
