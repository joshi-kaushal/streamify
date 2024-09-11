import React from 'react';
import { twMerge } from 'tailwind-merge';

interface MetricCardProps {
	id: number;
	title: string;
	desc: string;
	icon: React.ReactNode;
	metric: string | number;
	trend?: 'up' | 'down' | 'neutral'
}

export default function MetricCard({ title, desc, icon, metric, trend = 'neutral' }: MetricCardProps) {
	const trendColor = {
		up: 'text-green-600',
		down: 'text-red-500',
		neutral: 'text-blue-500'
	};

	return (
		<div className="p-6 space-y-4 transition-shadow duration-300 ease-in-out bg-white border border-gray-200 shadow-sm group rounded-xl hover:shadow-md">
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold text-gray-700">{title}</h2>
				<div className="text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
					{icon}
				</div>
			</div>

			<div>
				<h3 className="text-2xl font-bold text-gray-900">{metric.toLocaleString("en-in")}</h3>
				<div className="flex items-center mt-2">
					{trend !== 'neutral' && (
						<span className={`mr-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
							{trend === 'up' ? '↑' : '↓'}
						</span>
					)}
					<p className={twMerge(
						"text-sm font-medium",
						trendColor[trend]
					)}>
						{desc}
					</p>
				</div>
			</div>
		</div>
	);
}

