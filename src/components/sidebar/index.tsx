import { Box, Stack } from '@chakra-ui/react'
import { SidebarMenu } from './menu'
import { SIDEBAR_MENUS } from './constants'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <SidebarMenu options={SIDEBAR_MENUS.GENERAL.options} title={SIDEBAR_MENUS.GENERAL.title} />
        <SidebarMenu
          options={SIDEBAR_MENUS.AUTOMATION.options}
          title={SIDEBAR_MENUS.AUTOMATION.title}
        />
      </Stack>
    </Box>
  )
}
