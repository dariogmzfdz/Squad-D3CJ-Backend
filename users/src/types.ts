export enum UserRole {
  Admin = 'admin',
  User = 'user'
}

export interface User {
  userId: number
  username?: string
  password: string
  role: UserRole
  email: string
  status?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type UserSinPassword = Omit<User, 'password'>
export type NewUser = Omit<User, 'userId' | 'role'>
