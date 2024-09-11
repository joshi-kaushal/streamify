import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
	chartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"
import { USER_GROWTH } from "@/data/MockData"
import ChartWrapper from "./common/ChartWrapper"

export const description = "User growth wrt total users and active users"

export default function UserGrowth() {
	return (
		<ChartWrapper
			header="User growth"
			description="January - September 2024"
			footerTitle={<>Trending up by 5.2% this month <TrendingUp className="w-4 h-4" /></>}
			footerDescription="Showing the user growth wrt all users and active users"
			data={USER_GROWTH}
			fileName="User Growth"
		>
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
		</ChartWrapper>
	)
}
