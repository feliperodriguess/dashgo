import { api } from '../services/api'
import { CreateUserFormData, User } from '../utils/types'

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('/users', { params: { page } })
  const users = data.users.map((user: User) => ({
    ...user,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))
  const totalCount = Number(headers['x-total-count'])
  return { users, totalCount }
}

export const getUserById = async (userId: number) => {
  const response = await api.get(`users/${userId}`)
  return response.data
}

export const createUser = async (user: CreateUserFormData) => {
  const response = await api.post('users', {
    user: {
      name: user.name,
      email: user.email,
      created_at: new Date(),
    },
  })
  return response.data.user
}
