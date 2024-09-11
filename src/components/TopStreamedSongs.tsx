import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
	chartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"
import { TOP_STREAMING_SONGS } from "@/data/MockData"
import ChartWrapper from "./common/ChartWrapper"

export const description = "Top streamed songs in 2024"

export default function TopStreamedSongs() {
	return (
		<ChartWrapper
			header="Top streamed songs"
			description="January - September 2024"
			footerTitle={<>Trending up by 5.2% this month <TrendingUp className="w-4 h-4" /></>}
			footerDescription="Showing most streamed songs"
		>
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
		</ChartWrapper>
	)
}
