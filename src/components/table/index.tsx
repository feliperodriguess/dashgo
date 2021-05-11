import {
  Box,
  Button,
  Checkbox,
  Icon,
  Table as ChakraTable,
  Tbody,
  Th,
  Thead,
  Td,
  Tr,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'
import { User } from '../../utils/types'

interface TableProps {
  users: User[]
}

export function Table({ users }: TableProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

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
                <Text fontWeight="bold">{user.name}</Text>
                <Text fontSize="sm" color="gray.300">
                  {user.email}
                </Text>
              </Box>
            </Td>
            {isDesktop && <Td>{user.createdAt}</Td>}
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
