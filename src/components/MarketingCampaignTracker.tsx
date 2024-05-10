import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CAMPAIGN_DATA } from '@/data/MockData'
import { formatCurrency } from '@/utils/formatCurrency'

export default function MarketingCampaignTracker() {
	const [selectedMetric, setSelectedMetric] = useState('acquisitions')

	const totalAcquisitions = CAMPAIGN_DATA.reduce((sum, campaign) => sum + campaign.acquisitions, 0)
	const totalCost = CAMPAIGN_DATA.reduce((sum, campaign) => sum + campaign.cost, 0)
	const totalLTV = CAMPAIGN_DATA.reduce((sum, campaign) => sum + campaign.ltv, 0)
	const overallROI = ((totalLTV - totalCost) / totalCost) * 100

	return (
		<Card className="col-span-2">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">Marketing Campaign Tracker</CardTitle>
				<CardDescription>Track performance of ongoing marketing campaigns</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">Total Acquisitions</CardTitle>
							<Users className="w-4 h-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{totalAcquisitions}</div>
							<p className="text-xs text-muted-foreground">+20.1% from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">Total Cost</CardTitle>
							<DollarSign className="w-4 h-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{formatCurrency(totalCost)}</div>
							<p className="text-xs text-muted-foreground">+10.5% from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">Total LTV</CardTitle>
							<TrendingUp className="w-4 h-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{formatCurrency(totalLTV)}</div>
							<p className="text-xs text-muted-foreground">+35.2% from last month</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium">Overall ROI</CardTitle>
							{overallROI > 0 ? (
								<ArrowUpRight className="w-4 h-4 text-green-500" />
							) : (
								<ArrowDownRight className="w-4 h-4 text-red-500" />
							)}
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{overallROI.toFixed(2)}%</div>
							<p className="text-xs text-muted-foreground">+15.3% from last month</p>
						</CardContent>
					</Card>
				</div>

				<div className="mt-6">
					<div className="flex items-center mb-4 space-x-2">
						<Button
							variant={selectedMetric === 'acquisitions' ? 'default' : 'outline'}
							onClick={() => setSelectedMetric('acquisitions')}
						>
							Acquisitions
						</Button>
						<Button
							variant={selectedMetric === 'cost' ? 'default' : 'outline'}
							onClick={() => setSelectedMetric('cost')}
						>
							Cost
						</Button>
						<Button
							variant={selectedMetric === 'ltv' ? 'default' : 'outline'}
							onClick={() => setSelectedMetric('ltv')}
						>
							LTV
						</Button>
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
			</CardContent>
		</Card>
	)
}