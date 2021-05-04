import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react'
import { BaseView, Table } from '../../components'
import { RiAddLine } from 'react-icons/ri'

export default function UsersList() {
  return (
    <BaseView>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal" pl="4">
            Usuários
          </Heading>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            cursor="pointer"
          >
            Criar novo
          </Button>
        </Flex>
        <Table />
      </Box>
    </BaseView>
  )
}
