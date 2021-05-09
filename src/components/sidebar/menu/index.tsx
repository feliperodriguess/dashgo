import { Box, Icon, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../..'

interface SidebarMenuOptionProps {
  id: string
  icon: ElementType
  link: string
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
          <ActiveLink key={option.id} href={option.link} passHref>
            <ChakraLink display="flex" align="center">
              <Icon as={option.icon} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                {option.title}
              </Text>
            </ChakraLink>
          </ActiveLink>
        ))}
      </Stack>
    </Box>
  )
}
