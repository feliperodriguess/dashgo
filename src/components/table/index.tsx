import {
  Box,
  Button,
  Checkbox,
  Icon,
  Link as ChakraLink,
  Table as ChakraTable,
  Tbody,
  Th,
  Thead,
  Td,
  Tr,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useCallback } from 'react'
import { RiPencilLine } from 'react-icons/ri'
import { User } from '../../utils/types'
import { queryClient } from '../../services/queryClient'
import * as usersServices from '../../services/users'

interface TableProps {
  users: User[]
}

export function Table({ users }: TableProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  const handlePrefetchUser = useCallback(async (userId: number) => {
    await queryClient.prefetchQuery(['user', userId], () => usersServices.getUserById(userId), {
      staleTime: 1000 * 60 * 10, //10 minutes
    })
  }, [])

  return (
    <ChakraTable colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px={['4', '4', '6']} color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          {isDesktop && <Th>Data de cadastro</Th>}
          {isDesktop && <Th w="8"></Th>}
        </Tr>
      </Thead>

      <Tbody>
        {users?.map((user) => (
          <Tr key={user.id}>
            <Td px={['4', '4', '6']}>
              <Checkbox colorScheme="pink" />
            </Td>
            <Td>
              <Box>
                <ChakraLink
                  color="purple.400"
                  onMouseEnter={() => handlePrefetchUser(Number(user.id))}
                >
                  <Text fontWeight="bold">{user.name}</Text>
                </ChakraLink>
                <Text fontSize="sm" color="gray.300">
                  {user.email}
                </Text>
              </Box>
            </Td>
            {isDesktop && <Td>{user.created_at}</Td>}
            {isDesktop && (
              <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  cursor="pointer"
                >
                  Editar
                </Button>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  )
}
