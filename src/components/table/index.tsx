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
} from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

interface UserProps {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

interface TableProps {
  users: UserProps[]
}

export function Table({ users }: TableProps) {
  return (
    <ChakraTable colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px="6" color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de cadastro</Th>
          <Th w="8"></Th>
        </Tr>
      </Thead>

      <Tbody>
        {users.map(user => (
            <Tr key={user.id}>
            <Td px="6">
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
            <Td>{user.createdAt}</Td>
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
          </Tr>
        ))}

      </Tbody>
    </ChakraTable>
  )
}
