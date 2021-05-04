import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { Header, Sidebar } from '..'

interface BaseViewProps {
  children: ReactNode
}

export function BaseView({ children }: BaseViewProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" p="6">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  )
}
