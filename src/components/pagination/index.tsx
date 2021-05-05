import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'

interface PaginationProps {
  currentPage: number
  onPageClick: () => void
  perPage?: number
  total: number
}

export function Pagination({ currentPage, onPageClick, perPage = 10, total }: PaginationProps) {
  const pages = Array.from(Array(Math.ceil(total / perPage) + 1).keys()).filter(Boolean)

  const renderCurrentPage = useMemo(
    () => (
      <Button
        key={`current-users-page${currentPage}`}
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {currentPage}
      </Button>
    ),
    [currentPage]
  )

  const renderOtherPages = useCallback(
    (page) => (
      <Button
        key={`page ${page}`}
        id={page}
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{ bg: 'gray.500' }}
        onClick={onPageClick}
      >
        {page}
      </Button>
    ),
    [currentPage]
  )

  return (
    <Flex w="100%" align="center" justify="space-between">
      <Text color="gray.400">
        <Text fontWeight="bold" as="span">
          {(currentPage - 1) * (perPage) + 1}
        </Text>{' '}
        -{' '}
        <Text fontWeight="bold" as="span">
          {currentPage === pages[pages.length -1] ? total  : currentPage * perPage}
        </Text>{' '}
        de{' '}
        <Text fontWeight="bold" as="span">
          {total}
        </Text>
      </Text>

      <HStack align="center" justify="center" mt="8" spacing="4">
        {pages.map((page) => (page === currentPage ? renderCurrentPage : renderOtherPages(page)))}
      </HStack>
    </Flex>
  )
}
