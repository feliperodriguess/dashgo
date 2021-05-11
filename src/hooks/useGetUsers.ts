import * as usersServices from '../services/users'
import { useQuery } from 'react-query'

export const useGetUsers = () => {
  return useQuery('users', usersServices.getUsers, {
    staleTime: 1000 * 5, //5 seconds
  })
}
