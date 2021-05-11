import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { useCallback, useMemo, MouseEvent } from 'react'

interface PaginationProps {
  currentPage: number
  onPageChange: (event: MouseEvent) => void
  perPage?: number
  siblingsPagesCount?: number
  total: number
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => from + index + 1).filter((page) => page > 0)
}

export function Pagination({
  currentPage,
  onPageChange,
  perPage = 10,
  siblingsPagesCount = 1,
  total,
}: PaginationProps) {
  const lastPage = Math.ceil(total / perPage)
  const pages = Array.from(Array(lastPage + 1).keys()).filter(Boolean)
  const previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsPagesCount, currentPage - 1) : []
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsPagesCount, lastPage))
      : []

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
        onClick={onPageChange}
      >
        {page}
      </Button>
    ),
    [onPageChange]
  )

  return (
    <Flex w="100%" direction={['column', 'row']} align="center" justify="space-between">
      <Text mt="6">
        <Text fontWeight="bold" as="span">
          {(currentPage - 1) * perPage + 1}
        </Text>{' '}
        -{' '}
        <Text fontWeight="bold" as="span">
          {currentPage === pages[pages.length - 1] ? total : currentPage * perPage}
        </Text>{' '}
        de{' '}
        <Text fontWeight="bold" as="span">
          {total}
        </Text>
      </Text>

      <HStack align="center" justify="center" mt="6" spacing="4">
        {currentPage > 1 + siblingsPagesCount && renderOtherPages(1)} {/* First Page */}
        {currentPage > 2 + siblingsPagesCount && (
          <Text color="gray.300" w="6" textAlign="center">
            ...
          </Text>
        )}
        {previousPages?.map((page) => renderOtherPages(page))} {/* Left Siblings Pages */}
        {renderCurrentPage} {/* Current Page */}
        {nextPages?.map((page) => renderOtherPages(page))} {/* Right Siblings Pages */}
        {currentPage + 1 + siblingsPagesCount < lastPage && (
          <Text color="gray.300" w="6" textAlign="center">
            ...
          </Text>
        )}
        {currentPage + siblingsPagesCount < lastPage && renderOtherPages(lastPage)}
        {/* Last Page ⬆ */}
      </HStack>
    </Flex>
  )
}
