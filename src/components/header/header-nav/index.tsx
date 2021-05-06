import { Avatar, Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

interface HeaderNavProps {
  shouldShowProfileData?: boolean
}

export function HeaderNav({ shouldShowProfileData }: HeaderNavProps) {
  return (
    <Flex align="center" ml="auto">
      <HStack
        spacing={['6', '8']}
        mx={['6', '8']}
        pr={['6', '8']}
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
      <Flex align="center">
        {shouldShowProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Felipe Rodrigues</Text>
            <Text color="gray.300" fontSize="small">
              felipe.rodrigues@gmail.com
            </Text>
          </Box>
        )}
        <Avatar size="md" name="Felipe Rodrigues" src="https://github.com/feliperodriguess.png" />
      </Flex>
    </Flex>
  )
}
