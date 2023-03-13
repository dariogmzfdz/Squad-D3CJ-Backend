import { INTEGER, STRING } from 'sequelize'
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
    comment: 'user id'
  })
    userId!: number

  @Column({
    type: STRING,
    primaryKey: false,
    comment: 'username'
  })
    username!: string

  @Column({
    field: 'email'
  })
    email!: string

  @Column({
    field: 'password'
  })
    password!: string

  @Column({
    field: 'role_user'
  })
    role?: string

  @Column({
    field: 'createdAt'
  })
    createdAt!: Date

  @Column({
    field: 'updatedAt'
  })
    updatedAt!: Date
}
