import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from './logo'
import { SearchInput } from './search-input'
import { HeaderNav } from './header-nav'
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'

export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      {!isDesktop && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        ></IconButton>
      )}
      <Logo />
      {isDesktop && <SearchInput />}
      <HeaderNav shouldShowProfileData={isDesktop} />
    </Flex>
  )
}
