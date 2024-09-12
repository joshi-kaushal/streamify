import { useState, useMemo, } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { ChevronDown, ChevronUp, Search, X } from "lucide-react"

import { RECENT_STREAMS } from '@/data/MockData'
import ChartWrapper from './common/ChartWrapper'

type SortableColumns = "songName" | "artist" | "streamDate" | "streamCount"

export default function RecentStreams() {
	const [sortColumn, setSortColumn] = useState<SortableColumns | null>(null)
	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
	const [filters, setFilters] = useState<Filters>({ artist: '', songName: '' })

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

	const handleFilterChange = (
		e: React.ChangeEvent<HTMLInputElement> | { target: { value: string } },
		key: keyof Filters
	) => {
		setFilters(prev => ({ ...prev, [key]: e.target.value }));
	};

	return (
		<ChartWrapper
			header="Recent streams"
			description='Click on the table header to sort table based on the column'
			data={RECENT_STREAMS}
			fileName='Recent Streams'
		>

			<FilterComponent filters={filters} handleFilterChange={handleFilterChange} />

			<div className="my-2 border rounded-md">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>
								<button className='flex items-center' onClick={() => handleSort('songName')}>
									Song Name
									{sortColumn === 'songName' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</button>
							</TableHead>
							<TableHead>
								<button className='flex items-center' onClick={() => handleSort('artist')}>
									Artist
									{sortColumn === 'artist' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</button>
							</TableHead>
							<TableHead>
								<button className='flex items-center' onClick={() => handleSort('streamDate')}>
									Date Streamed
									{sortColumn === 'streamDate' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</button>
							</TableHead>
							<TableHead>
								<button className='flex items-center' onClick={() => handleSort('streamCount')}>
									Stream Count
									{sortColumn === 'streamCount' && (sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />)}
								</button>
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

const FilterComponent = ({ filters, handleFilterChange }: FilterComponentProps) => {
	const clearFilter = (filterName: keyof Filters) => {
		handleFilterChange({ target: { value: '' } }, filterName);
	};

	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<div className="flex-1">
				<label htmlFor="artist-filter" className="block mb-1 text-sm font-medium text-gray-700">
					Artist
				</label>
				<div className="relative">
					<input
						id="artist-filter"
						type="text"
						placeholder="Filter by artist"
						value={filters.artist}
						onChange={(e) => handleFilterChange(e, 'artist')}
						className="w-full p-2 pl-10 pr-10 transition-all duration-300 ease-in-out border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
					{filters.artist && (
						<button
							onClick={() => clearFilter('artist')}
							className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
						>
							<X size={18} />
						</button>
					)}
				</div>
			</div>
			<div className="flex-1">
				<label htmlFor="song-filter" className="block mb-1 text-sm font-medium text-gray-700">
					Song Name
				</label>
				<div className="relative">
					<input
						id="song-filter"
						type="text"
						placeholder="Filter by song name"
						value={filters.songName}
						onChange={(e) => handleFilterChange(e, 'songName')}
						className="w-full p-2 pl-10 pr-10 transition-all duration-300 ease-in-out border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
					{filters.songName && (
						<button
							onClick={() => clearFilter('songName')}
							className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
						>
							<X size={18} />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

interface Filters {
	artist: string;
	songName: string;
}

interface FilterComponentProps {
	filters: Filters;
	handleFilterChange: (e: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }, filterName: keyof Filters) => void;
}