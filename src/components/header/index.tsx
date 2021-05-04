import { Flex } from '@chakra-ui/react'

import { Logo } from './logo'
import { SearchInput } from './search-input'
import { HeaderNav } from './header-nav'

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />
      <SearchInput />
      <HeaderNav />
    </Flex>
  )
}
