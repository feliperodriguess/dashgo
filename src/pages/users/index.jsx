import { Box } from '@chakra-ui/react'

import { Header } from '../../components'
import { Sidebar } from '../../components'

export default function UsersList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" p="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8"></Box>
      </Flex>
    </Box>
  )
}
