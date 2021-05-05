import { SimpleGrid } from '@chakra-ui/react'

import { BaseView } from '../../components'
import { Chart } from './chart'
import { CHART_OPTIONS, CHART_SERIES } from './constants'

export default function Dashboard() {
  return (
    <BaseView>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        {/*@ts-ignore TS complaning about options.xaxis.type but it's right*/}
        <Chart
          title="Inscritos da semana"
          options={CHART_OPTIONS}
          series={CHART_SERIES}
          type="area"
        />
        {/*@ts-ignore TS complaning about options.xaxis.type but it's right*/}
        <Chart title="Taxa de abertura" options={CHART_OPTIONS} series={CHART_SERIES} type="area" />
      </SimpleGrid>
    </BaseView>
  )
}