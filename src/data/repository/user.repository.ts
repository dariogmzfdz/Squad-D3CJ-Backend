import { connect } from '../../config/user.db.config'
import { NewUser } from '../../types'
import { Users as DBUsers } from '../model/user.model'

export class UserRepository {
  private db: any
  private userRepository: any

  constructor () {
    this.db = connect()
    this.userRepository = this.db.sequelize.getRepository(DBUsers)
  }

  async getAllUsers (): Promise<DBUsers[]> {
    try {
      const Users = await this.userRepository.findAll()
      console.log('users:::', Users)

      return Users
    } catch (err) {
      console.error('An error occurred when retrieving users.')
      console.error(err)

      return []
    }
  }

  async getUserById (id: number): Promise<DBUsers> {
    let data: DBUsers = {} as DBUsers
    try {
      data = await this.userRepository.findByPk(id)
      // const users = await this.userRepository.findOne({ where : { userId : id }})
      console.log('users:::', data)
    } catch (err) {
      console.error('An error occurred when retrieving the user.')
      console.error(err)
    }
    return data
  }

  async addUser (user: NewUser): Promise<DBUsers> {
    let data: DBUsers = user as DBUsers
    try {
      data = await this.userRepository.findOne({ where: { email: user.email } })
      if (data == null) {
        data = await this.userRepository.create(user)
      } else {
        console.error('The user already exists.')
      }
    } catch (err) {
      console.error('An error occurred when adding the user.')
      console.error(err)
    }
    return data
  }

  async login (email: string): Promise<DBUsers> {
    let data: DBUsers = {} as DBUsers
    try {
      data = await this.userRepository.findOne({ where: { email } })
      if (data == null) {
        console.error('The user does not exist.')
      } else {
        console.log('The user exists.')
      }
    } catch (err) {
      console.error('An error occurred when retrieving the user.')
      console.error(err)
    }
    return data
  }

  async deleteUser (id: number): Promise<boolean> {
    let result = false
    try {
      const users = await this.userRepository.destroy({ where: { userId: id } })
      result = users > 0
    } catch (err) {
      console.error('An error occurred when deleting the user.')
      console.error(err)
    }
    return result
  }
}
