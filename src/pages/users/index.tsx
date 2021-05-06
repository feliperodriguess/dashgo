import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react'
import { useCallback, useMemo, useState  } from 'react'
import { BaseView, Pagination, Table } from '../../components'
import { RiAddLine } from 'react-icons/ri'
import { USERS_MOCK } from './constants'

const PER_PAGE = 10
export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1)

  const displayedUsers = useMemo(() => (
    USERS_MOCK.filter((user, index) => index > ((currentPage -1) * PER_PAGE - 1) && index < currentPage * PER_PAGE)
  ), [currentPage])

  const onPageClick = useCallback((event) => {
    const { target } = event
    setCurrentPage(Number(target.id))
  }, [])

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
        <Table users={displayedUsers} />
        <Pagination currentPage={currentPage} onPageClick={onPageClick} perPage={PER_PAGE} total={USERS_MOCK.length} />
      </Box>
    </BaseView>
  )
}
