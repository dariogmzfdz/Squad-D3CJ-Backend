import { UserService } from '../services/user.service'
import { parseInputUser, parseInputLogin } from '../utils/utils'

import jwt from 'jsonwebtoken'

const userService: UserService = new UserService()

export const userController = {
  getUsers: (_req: any, res: any) => {
    void userService.getUsers().then(result => {
      res.send(result)
    })
  },
  getUserById: (req: any, res: any) => {
    userService.getUserById(+req.params.id).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  addUser: (req: any, res: any) => {
    try {
      const inputUser = parseInputUser(req.body)
      userService.addUser(inputUser).then(result => {
        res.json(result)
      })
    } catch (e) {
      res.sendStatus(400)
    }
  },
  deleteUser: (req: any, res: any) => {
    userService.deleteUser(+req.params.id).then(result => {
      return (result != null) ? res.send(result) : res.sendStatus(404)
    })
  },
  login: (req: any, res: any) => {
    try {
      const inputUser = parseInputLogin(req.body)
      userService.login(inputUser.email).then(result => {
        if (result != null) {
          const token = jwt.sign({ userId: result.userId, username: result.username, email: result.email, roles: result.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' })
          res.json({ token })
        } else {
          res.sendStatus(404)
        }
      })
    } catch (e) {
      res.sendStatus(400)
    }
  }

}
