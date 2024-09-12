import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, TrendingUp } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CAMPAIGN_DATA } from '@/data/MockData'
import { formatCurrency } from '@/utils/formatCurrency'
import ChartWrapper from './common/ChartWrapper'
import MetricCard from './common/MetricCard'
import { twJoin } from 'tailwind-merge'

export default function MarketingCampaignTracker() {
	const [selectedMetric, setSelectedMetric] = useState('acquisitions')

	const totalAcquisitions = CAMPAIGN_DATA.reduce((sum, campaign) => sum + campaign.acquisitions, 0)
	const totalCost = CAMPAIGN_DATA.reduce((sum, campaign) => sum + campaign.cost, 0)
	const totalLTV = CAMPAIGN_DATA.reduce((sum, campaign) => sum + campaign.ltv, 0)
	const overallROI = ((totalLTV - totalCost) / totalCost) * 100

	const cards = [
		{
			id: 1,
			title: "Total Acquisitions",
			desc: "+20.1% from last month",
			icon: <Users />,
			metric: totalAcquisitions,
			trend: "up" as const
		},
		{
			id: 2,
			title: "Total Cost",
			desc: "+10.5% from last month",
			icon: <DollarSign />,
			metric: formatCurrency(totalCost),
			trend: "up" as const
		},
		{
			id: 3,
			title: "Total LTV",
			desc: "+35.2% from last month",
			icon: <TrendingUp />,
			metric: formatCurrency(totalLTV),
			trend: "up" as const
		},
		{
			id: 4,
			title: "Overall ROI",
			desc: "+15.3% from last month",
			icon: overallROI > 0 ? <ArrowUpRight /> : <ArrowDownRight />,
			metric: `${overallROI.toFixed(2)}%`,
			trend: "up" as const
		}
	]


	return (
		<ChartWrapper
			header="Marketing Campaign"
			description="January - September 2024"
			data={CAMPAIGN_DATA}
			fileName="Marketing campaign"
		>
			{/* Metric cards */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{
					cards.map(metric => (
						<MetricCard
							key={metric.id}
							id={metric.id}
							title={metric.title}
							desc={metric.desc}
							icon={metric.icon}
							metric={metric.metric}
							trend={metric.trend}
						/>
					))
				}
			</div>

			{/* Buttons to switch table */}
			<div className="mt-6">
				<div className="flex items-center mb-4 space-x-2">
					<button
						className={twJoin(
							"px-2 py-1.5 font-semibold text-sm rounded-lg  transition duration-300",
							selectedMetric === 'acquisitions' ? 'bg-slate-950 hover:bg-slate-800 text-white' : 'border-slate-950 border hover:bg-slate-100 text-slate-950'
						)}
						onClick={() => setSelectedMetric('acquisitions')}
					>
						Acquisitions
					</button>
					<button
						className={twJoin(
							"px-2 py-1.5 transition-colors duration-300 font-semibold text-sm rounded-lg",
							selectedMetric === 'cost' ? 'bg-slate-950 hover:bg-slate-800 text-white' : 'border-slate-950 border hover:bg-slate-100 text-slate-950'
						)}
						onClick={() => setSelectedMetric('cost')}
					>
						Cost
					</button>
					<button
						className={twJoin(
							"px-2 py-1.5 font-semibold text-sm rounded-lg  transition duration-300",
							selectedMetric === 'ltv' ? 'bg-slate-950 hover:bg-slate-800 text-white' : 'border-slate-950 border hover:bg-slate-100 text-slate-950'
						)}
						onClick={() => setSelectedMetric('ltv')}
					>
						LTV
					</button>
				</div>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={CAMPAIGN_DATA}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey={selectedMetric} fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Table */}
			<div className="mt-6">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Campaign</TableHead>
							<TableHead>Acquisitions</TableHead>
							<TableHead>Cost</TableHead>
							<TableHead>LTV</TableHead>
							<TableHead>ROI</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{CAMPAIGN_DATA.map((campaign) => (
							<TableRow key={campaign.id}>
								<TableCell className="font-medium">{campaign.name}</TableCell>
								<TableCell>{campaign.acquisitions}</TableCell>
								<TableCell>{formatCurrency(campaign.cost)}</TableCell>
								<TableCell>{formatCurrency(campaign.ltv)}</TableCell>
								<TableCell>{campaign.roi}%</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</ChartWrapper>
	)
}