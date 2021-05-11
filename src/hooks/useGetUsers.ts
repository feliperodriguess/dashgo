import * as usersServices from '../services/users'
import { useQuery } from 'react-query'

export const useGetUsers = (page: number) => {
  return useQuery(['users', page], () => usersServices.getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minutes
  })
}
