'use client'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  oyl: {
    label: 'OYL',
    color: 'hsl(var(--chart-5))',
  },
  xverse: {
    label: 'XVERSE',
    color: 'hsl(var(--chart-1))',
  },
  leather: {
    label: 'LEATHER',
    color: 'hsl(var(--chart-2))',
  },
  wiz: {
    label: 'WIZ',
    color: 'hsl(var(--chart-3))',
  },
  'magic-eden': {
    label: 'ME',
    color: 'hsl(var(--chart-4))',
  },
  phantom: {
    label: 'PHANTOM',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function PollResults({ pollResults }: { pollResults: any[] }) {
  // Format the poll results for the chart
  const chartData = pollResults.map((result) => ({
    wallet: result.wallet.toLowerCase().replace(' ', '-'),
    votes: result.votes,
    //@ts-ignore
    fill: chartConfig[result.wallet.toLowerCase().replace(' ', '-')]
      .color as string,
  }))

  return (
    <ChartContainer config={chartConfig} className={'w-[200px] h-[200px]'}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        className={'h-full'}
        margin={{}}
      >
        <YAxis
          dataKey="wallet"
          type="category"
          tickLine={false}
          fontSize={12}
          tickMargin={10}
          axisLine={false}
          className={'font-black'}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <XAxis dataKey="votes" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="votes" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  )
}
