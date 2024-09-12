import { KEY_METRICS } from "../data/MockData";
import MetricCard from "./common/MetricCard";
import { motion } from 'framer-motion';

export default function KeyMetrics() {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			id="metrics"
		>
			<motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} custom={KEY_METRICS.length}>
				{KEY_METRICS.map((metric) => (
					<motion.div key={metric.id} variants={fadeInAnimationVariants}>
						<MetricCard {...metric} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	)
}

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
	}
}

const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.05,
		},
	},
}