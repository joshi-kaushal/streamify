import { TrendingDown } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
	chartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"
import { REVENUE_DISTRIBUTION } from "@/data/MockData"
import { useMemo } from "react"
import ChartWrapper from "./common/ChartWrapper"
import { shortenCurrency } from "@/utils/shortenCurrency"

export const description = "Revenue distribution"

export default function RevenueDistribution() {
	const TOTAL_REVENUE = useMemo(() => {
		return REVENUE_DISTRIBUTION.reduce((acc, curr) => acc + curr.revenue, 0)
	}, [])
	return (
		<ChartWrapper
			header="Revenue distribution"
			description="January - September 2024"
			footerDescription="Showing total revenue in year 2024."
			footerTitle={<>Revenue decreased by 3.2% than last year <TrendingDown className="w-4 h-4" /></>}
		>
			<ChartContainer
				config={chartConfig}
				className="mx-auto aspect-square max-h-[400px]"
			>
				<PieChart>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
					/>
					<Pie
						data={REVENUE_DISTRIBUTION}
						dataKey="revenue"
						nameKey="source"
						innerRadius={60}
						strokeWidth={5}
					>
						<Label
							content={({ viewBox }) => {
								if (viewBox && "cx" in viewBox && "cy" in viewBox) {
									return (
										<text
											x={viewBox.cx}
											y={viewBox.cy}
											textAnchor="middle"
											dominantBaseline="middle"
										>
											<tspan
												x={viewBox.cx}
												y={viewBox.cy}
												className="text-3xl font-bold fill-foreground"
											>
												{shortenCurrency(TOTAL_REVENUE)}
											</tspan>
											<tspan
												x={viewBox.cx}
												y={(viewBox.cy || 0) + 24}
												className="fill-muted-foreground"
											>
												Revenue in USD
											</tspan>
										</text>
									)
								}
							}}
						/>
					</Pie>
				</PieChart>
			</ChartContainer>
		</ChartWrapper>
	)
}
