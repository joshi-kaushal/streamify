import { MdDataArray } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { RiPieChartLine } from "react-icons/ri";
import { MdOutlineSsidChart } from "react-icons/md";
import { FaSpotify } from "react-icons/fa6";
import { useState } from "react"

import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { motion } from 'framer-motion';

const links = [
	{
		label: "Dashboard",
		href: "#",
		icon: (
			<MdDataArray className="flex-shrink-0 w-5 h-5 text-neutral-700 " />
		),
	},
	{
		label: "Trending songs",
		href: "#",
		icon: (
			<BsFillBarChartFill className="flex-shrink-0 w-5 h-5 text-neutral-700 " />
		),
	},
	{
		label: "Revenue distribution",
		href: "#",
		icon: (
			<RiPieChartLine className="flex-shrink-0 w-5 h-5 text-neutral-700 " />
		),
	},
	{
		label: "User growth",
		href: "#",
		icon: (
			<MdOutlineSsidChart className="flex-shrink-0 w-5 h-5 text-neutral-700 " />
		),
	},
];

export default function SidebarApp() {
	const [open, setOpen] = useState(false);

	return (
		<Sidebar open={open} setOpen={setOpen} animate={true}>
			<SidebarBody className="fixed top-0 left-0 z-10 justify-between h-full min-h-screen gap-10 border-r-2 rounded-r-2xl bg-slate-200 border-slate-300">
				<div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
					<a
						href="#"
						className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-black"
					>

						<div className="flex-shrink-0 w-6 h-5 ">
							<FaSpotify className="size-6 text-[#1DB954]" /></div>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="font-medium text-black whitespace-pre"
						>
							Streamify
						</motion.span>
					</a>

					<div className="flex flex-col gap-2 mt-8">
						{links.map((link, idx) => (
							<SidebarLink key={idx} link={link} />
						))}
					</div>
				</div>
				<div>
					<SidebarLink
						link={{
							label: "Kaushal Joshi",
							href: "https://x.com/clumsy_coder",
							icon: (
								<img
									src="https://pbs.twimg.com/profile_images/1612674697409486850/Bjo6CaaE_400x400.jpg"
									className="flex-shrink-0 rounded-full h-7 w-7"
									width={50}
									height={50}
									alt="Avatar"
								/>
							),
						}}
					/>
				</div>
			</SidebarBody>
		</Sidebar>
	);

}
