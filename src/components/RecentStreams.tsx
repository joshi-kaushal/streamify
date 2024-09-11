import { useState, useMemo, } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

import { RECENT_STREAMS } from '@/data/MockData'
import ChartWrapper from './common/ChartWrapper'

type SortableColumns = "songName" | "artist" | "streamDate" | "streamCount"

export default function RecentStreams() {
	const [sortColumn, setSortColumn] = useState<SortableColumns | null>(null)
	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
	const [filters, setFilters] = useState({ artist: '', songName: '' })

	const sortedAndFilteredData = useMemo(() => {
		const filteredData = RECENT_STREAMS.filter(stream =>
			stream.artist.toLowerCase().includes(filters.artist.toLowerCase()) &&
			stream.songName.toLowerCase().includes(filters.songName.toLowerCase())
		)

		if (sortColumn) {
			filteredData.sort((a, b) => {
				if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
				if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
				return 0
			})
		}

		return filteredData
	}, [sortColumn, sortDirection, filters.artist, filters.songName])

	const handleSort = (column: string) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
		} else {
			setSortColumn(column as SortableColumns)
			setSortDirection('asc')
		}
	}

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof typeof filters) => {
		setFilters(prev => ({ ...prev, [key]: e.target.value }))
	}

	return (
		<ChartWrapper
			header="Recent streams"
			description='Click on the table header to sort table based on the column'
			data={RECENT_STREAMS}
			fileName='Recent Streams'
		>
			<div className="flex flex-col gap-2 mb-4 md:flex-row">
				<input
					type="text"
					placeholder="Filter by artist"
					value={filters.artist}
					onChange={(e) => handleFilterChange(e, 'artist')}
					className="p-2 border rounded"
				/>
				<input
					type="text"
					placeholder="Filter by song name"
					value={filters.songName}
					onChange={(e) => handleFilterChange(e, 'songName')}
					className="p-2 border rounded"
				/>
			</div>
			<div className="my-2 border rounded-md">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>
								<Button variant="ghost" onClick={() => handleSort('songName')}>
									Song Name
									{sortColumn === 'songName' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</Button>
							</TableHead>
							<TableHead>
								<Button variant="ghost" onClick={() => handleSort('artist')}>
									Artist
									{sortColumn === 'artist' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</Button>
							</TableHead>
							<TableHead>
								<Button variant="ghost" onClick={() => handleSort('streamDate')}>
									Date Streamed
									{sortColumn === 'streamDate' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</Button>
							</TableHead>
							<TableHead>
								<Button variant="ghost" onClick={() => handleSort('streamCount')}>
									Stream Count
									{sortColumn === 'streamCount' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</Button>
							</TableHead>
							<TableHead>User ID</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{sortedAndFilteredData.length === 0 && (
							<p className='w-full py-2 text-center'>No data for the selected filters</p>
						)}
						{sortedAndFilteredData.map((stream, index) => (
							<TableRow key={index}>
								<TableCell className="font-medium">{stream.songName}</TableCell>
								<TableCell>{stream.artist}</TableCell>
								<TableCell>{stream.streamDate}</TableCell>
								<TableCell>{stream.streamCount}</TableCell>
								<TableCell>{stream.userId}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</ChartWrapper>
	)
}