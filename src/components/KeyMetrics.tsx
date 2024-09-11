import { KEY_METRICS } from "../data/MockData";
import MetricCard from "./common/MetricCard";

export default function KeyMetrics() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{
				KEY_METRICS.map(metric => (
					<MetricCard key={metric.id} {...metric} />
				))
			}
		</div>
	)
}