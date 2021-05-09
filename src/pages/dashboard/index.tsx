import { SimpleGrid } from '@chakra-ui/react'

import { BaseView, Chart } from '../../components'
import { CHART_OPTIONS, CHART_SERIES } from './constants'

export default function Dashboard() {
  return (
    <BaseView>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        <Chart
          title="Inscritos da semana"
          options={CHART_OPTIONS}
          series={CHART_SERIES}
          type="area"
        />
        <Chart title="Taxa de abertura" options={CHART_OPTIONS} series={CHART_SERIES} type="area" />
      </SimpleGrid>
    </BaseView>
  )
}
