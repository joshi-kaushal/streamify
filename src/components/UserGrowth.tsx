import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
	chartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"
import { USER_GROWTH } from "@/data/MockData"

export const description = "User growth wrt total users and active users"

export default function UserGrowth() {
	return (
		<ChartContainer config={chartConfig}>
			<AreaChart
				accessibilityLayer
				data={USER_GROWTH}
				margin={{
					left: -20,
					right: 12,
				}}
			>
				<CartesianGrid vertical={true} />
				<XAxis
					dataKey="month"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>
				<YAxis tickFormatter={(value) => (value / 1000000).toFixed(1) + 'M'}
				/>
				<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
				<Area
					dataKey="Total users"
					type="natural"
					fill="#2EB78A"
					fillOpacity={0.4}
					stroke="#2EB78A"
					stackId="a"
				/>
				<Area
					dataKey="Active users"
					type="natural"
					fill="#AF57DB"
					fillOpacity={0.4}
					stroke="#AF57DB"
					stackId="a"
				/>
			</AreaChart>
		</ChartContainer>
	)
}
