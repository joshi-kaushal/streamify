
import { motion } from 'framer-motion';
import { FaSpotify } from "react-icons/fa6"

export default function Navbar() {
	return (
		<div className="container px-4 py-6 mx-auto sm:py-8">
			<div className="flex flex-col items-center justify-between sm:flex-row">
				<motion.div
					className="mb-4 text-center sm:mb-0 sm:text-left"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="flex items-center justify-center mb-2 sm:justify-start">
						<FaSpotify className="mr-2 text-3xl text-green-400 sm:text-4xl" />
						<h1 className="text-xl font-bold lg:text-3xl sm:text-4xl md:text-5xl">
							Streamify Admin Dashboard
						</h1>
					</div>
					<p className="text-lg text-slate-800 sm:text-xl">
						Your music, your way
					</p>
				</motion.div>

				<motion.div
					className="flex flex-row gap-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<button className="px-4 py-2 font-bold text-white transition duration-300 bg-red-500 rounded hover:bg-red-600">
						Log Out
					</button>
					<button className="px-4 py-2 font-bold text-white transition duration-300 bg-green-500 rounded hover:bg-green-600">
						Open Streamify
					</button>
				</motion.div>
			</div>
		</div>
	)
}