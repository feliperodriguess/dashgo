import { Box, Text } from '@chakra-ui/react'
import { Props as ApexChartProps } from 'react-apexcharts'
import dynamic from 'next/dynamic'

interface Chart extends ApexChartProps {
  title: string
}

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export function Chart({ title, ...otherProps }) {
  return (
    <Box p={['6', '8']} bg="gray.800" borderRadius={8}>
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <ApexChart height={160} {...otherProps} />
    </Box>
  )
}
