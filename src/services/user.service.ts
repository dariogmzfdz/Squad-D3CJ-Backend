import { NewUser, User, UserRole, UserSinPassword } from '../types'
import { Users as DBUsers } from '../data/model/user.model'
import { UserRepository } from '../data/repository/user.repository'

export class UserService {
  private userRepository: UserRepository

  constructor () {
    this.userRepository = new UserRepository()
  }

  async getUsers (): Promise<User[]> {
    const userPromise = await this.userRepository.getAllUsers().then(result => {
      const users: User[] = []
      result.forEach(dbUser => {
        users.push(mapUserResult(dbUser))
      })
      return users
    }).catch(err => {
      console.error('An error occurred when retrieving users.')
      console.error(err)
      throw (err)
    })
    return userPromise
  }

  async getUsersSinPassword (): Promise<UserSinPassword[]> {
    const userPromise = await this.userRepository.getAllUsers().then(result => {
      const users: UserSinPassword[] = []
      result.map(({ id, username, role, email }) => {
        return { id, username, role, email }
      })
      return users
    }).catch(err => {
      console.error('An error occurred when retrieving users.')
      console.error(err)
      throw (err)
    })
    return userPromise
  }

  async getUserById (id: number): Promise<User | undefined> {
    const userPromise = await this.userRepository.getUserById(id).then(result => {
      if (result != null) {
        return mapUserResult(result)
      } else {
        return undefined
      }
    }).catch(err => {
      console.error('An error occurred when retrieving the user.')
      console.error(err)
      return undefined
    })
    return userPromise
  }

  async addUser (user: NewUser): Promise<User> {
    const userPromise = await this.userRepository.addUser(user).then(result => {
      return mapUserResult(result)
    }).catch(err => {
      console.error('An error occurred when adding the user.')
      console.error(err)
      throw (err)
    })
    return userPromise
  }

  async updateUser (user: User): Promise<User | undefined> {
    const userPromise = await this.userRepository.updateUser(user).then(result => {
      if (result != null) {
        return mapUserResult(result)
      } else {
        return undefined
      }
    }).catch(err => {
      console.error('An error occurred when updating the user.')
      console.error(err)
      return undefined
    })
    return userPromise
  }

  async login (email: string): Promise<User | undefined> {
    const userPromise = await this.userRepository.login(email).then(result => {
      if (result != null) {
        return mapUserResult(result)
      } else {
        return undefined
      }
    }).catch(err => {
      console.error('An error occurred when logging in.')
      console.error(err)
      return undefined
    })
    return userPromise
  }

  async deleteUser (id: number): Promise<boolean> {
    const userPromise = await this.userRepository.deleteUser(id).then(result => {
      return result
    }).catch(err => {
      console.error('An error occurred when deleting the user.')
      console.error(err)
      throw (err)
    })
    return userPromise
  }
}

export const mapUserResult = (user: DBUsers): User => {
  const returnUser = {
    userId: user.dataValues.userId,
    username: user.dataValues.username,
    password: user.dataValues.password,
    role: user.dataValues.role as UserRole,
    email: user.dataValues.email
  }
  return returnUser
}
