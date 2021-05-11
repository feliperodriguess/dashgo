import { api } from '../services/api'
import { User } from '../utils/types'

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('/users', { params: { page } })
  const users = data.users.map((user: User) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))
  const totalCount = Number(headers['x-total-count'])
  return { users, totalCount }
}
