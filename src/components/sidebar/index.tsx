import { useMemo } from 'react'
import { Box, Stack, useBreakpointValue } from '@chakra-ui/react'
import { SidebarMenu } from './menu'
import { SIDEBAR_MENUS } from './constants'
import { SidebarDrawer } from './drawer'
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  const renderSidebarContent = useMemo(
    () => (
      <Stack spacing="12" align="flex-start">
        <SidebarMenu options={SIDEBAR_MENUS.GENERAL.options} title={SIDEBAR_MENUS.GENERAL.title} />
        <SidebarMenu
          options={SIDEBAR_MENUS.AUTOMATION.options}
          title={SIDEBAR_MENUS.AUTOMATION.title}
        />
      </Stack>
    ),
    []
  )

  return (
    <Box as="aside" w={isDesktop ? '64' : 'auto'} mr={isDesktop ? '8' : '0'}>
      {isDesktop ? (
        renderSidebarContent
      ) : (
        <SidebarDrawer isOpen={isOpen} onClose={onClose} title="Navegação">
          {renderSidebarContent}
        </SidebarDrawer>
      )}
    </Box>
  )
}
