import { Products } from '../model/product.model'
import { Sequelize } from 'sequelize-typescript'

export const connect = () => {
  const hostName = !(process.env.DB_HOST == null) ? process.env.DB_HOST : 'localhost'
  const port = !(process.env.DB_PORT == null) ? process.env.DB_PORT : 5432
  const userName = 'postgres'
  const password = 'postgres'
  const database = !(process.env.DB_NAME == null) ? process.env.DB_NAME : 'postgres'
  const schema = 'D3CJ'
  const dialect: any = 'postgres'
  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    port: +port,
    dialect,
    repositoryMode: true,
    schema,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000
    }
  })

  sequelize.addModels([Products])

  const db: any = {}
  db.Sequelize = Sequelize
  db.sequelize = sequelize

  return db
}
