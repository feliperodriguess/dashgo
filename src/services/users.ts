import { api } from '../services/api'
import { User } from '../utils/types'

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users')
  const users = response.data.users.map((user: User) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))
  return users
}
