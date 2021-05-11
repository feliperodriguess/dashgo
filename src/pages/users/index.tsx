import { Box, Button, Flex, Heading, Icon, Spinner, Text } from '@chakra-ui/react'
import { useCallback, useMemo, useState, MouseEvent } from 'react'
import { BaseView, Pagination, Table } from '../../components'
import { RiAddLine } from 'react-icons/ri'
import Link from 'next/link'

import { useGetUsers } from '../../hooks/useGetUsers'

const PER_PAGE = 10
export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isFetching, isLoading, error } = useGetUsers(currentPage)

  const onPageChange = useCallback((event: MouseEvent & { target: HTMLButtonElement }) => {
    setCurrentPage(Number(event.target.id))
  }, [])

  const renderTable = useMemo(() => {
    if (isLoading) {
      return (
        <Flex height="100%" align="center" justify="center">
          <Spinner />
        </Flex>
      )
    }
    if (error) {
      return (
        <Flex height="100%" align="center" justify="center">
          <Text color="red.400" fontSize="sm" fontWeight="bold">
            Falha ao obter dados dos usuários
          </Text>
        </Flex>
      )
    }
    return (
      <Box>
        <Table users={data?.users} />
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          perPage={PER_PAGE}
          total={data?.totalCount}
        />
      </Box>
    )
  }, [currentPage, data, error, isLoading, onPageChange])

  return (
    <BaseView>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal" pl="4">
            Usuários
            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
          </Heading>
          <Link href="/users/create" passHref>
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
          </Link>
        </Flex>
        {renderTable}
      </Box>
    </BaseView>
  )
}
