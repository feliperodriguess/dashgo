import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { ElementType } from 'react'

interface SidebarMenuOptionProps {
  id: string
  icon: ElementType
  title: string
}

interface SidebarMenuProps {
  options: SidebarMenuOptionProps[]
  title: string
}

export function SidebarMenu({ options, title }: SidebarMenuProps) {
  return (
    <Box>
      <Text fontSize="small" fontWeight="bold" color="gray.400">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {options.map((option) => (
          <Link key={option.id} display="flex" align="center">
            <Icon as={option.icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              {option.title}
            </Text>
          </Link>
        ))}
      </Stack>
    </Box>
  )
}
