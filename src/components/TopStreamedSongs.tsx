import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
	chartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"
import { TOP_STREAMING_SONGS } from "@/data/MockData"

export const description = "Top streamed songs in 2024"

export default function TopStreamedSongs() {
	return (

		<ChartContainer config={chartConfig}>
			<BarChart
				accessibilityLayer
				data={TOP_STREAMING_SONGS}
				margin={{
					top: 20,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="name"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>
				<Bar dataKey="Stream count" fill="#E88C30" radius={8}>
					<LabelList
						position="top"
						offset={12}
						className="fill-foreground"
						fontSize={12}
					/>
				</Bar>
			</BarChart>
		</ChartContainer>
	)
}
