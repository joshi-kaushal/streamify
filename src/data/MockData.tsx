import { RiUserStarLine, RiMusicFill, RiAdvertisementLine, RiMoneyRupeeCircleLine, RiUser3Line, RiVoiceprintLine } from "react-icons/ri";

export const KEY_METRICS = [
	{
		id: 1,
		title: "Total users",
		metric: 32_23_345,
		desc: "+1.4% than last month",
		icon: <RiUser3Line className="size-6" />,
		trend: "up" as const
	},
	{
		id: 2,
		title: "Active users",
		metric: 46_123,
		desc: "+0.63% than last month",
		icon: <RiUserStarLine className="size-6" />,
		trend: "up" as const
	},
	{
		id: 3,
		title: "Total streams",
		metric: 2_93_42_852,
		desc: "+2.1% than last month",
		icon: <RiVoiceprintLine className="size-6" />,
		trend: "up" as const
	},
	{
		id: 4,
		title: "Ads revenue",
		metric: "$1,23,456.33",
		desc: "-2.2% than last month",
		icon: <RiAdvertisementLine className="size-6" />,
		trend: "down" as const
	},
	{
		id: 5,
		title: "Subscriptions revenue",
		metric: "$21,20,000.00",
		desc: "+1.4% than last month",
		icon: <RiMoneyRupeeCircleLine className="size-6" />,
		trend: "up" as const
	},
	{
		id: 6,
		title: "Top artist",
		metric: "Hans Zimmer",
		desc: "3.5m streams last month",
		icon: <RiMusicFill className="size-6" />,
		trend: "neutral" as const
	},
]

export const USER_GROWTH = [
	{ month: "Oct 2024", "Total users": 1150000, "Active users": 520000 },
	{ month: "Nov 2024", "Total users": 1175000, "Active users": 535000 },
	{ month: "Dec 2024", "Total users": 1195000, "Active users": 550000 },
	{ month: "Jan 2024", "Total users": 1110000, "Active users": 562000 },
	{ month: "Feb 2024", "Total users": 1125000, "Active users": 573000 },
	{ month: "Mar 2024", "Total users": 1135000, "Active users": 881000 },
	{ month: "Apr 2024", "Total users": 1145678, "Active users": 889012 },
	{ month: "May 2024", "Total users": 1167890, "Active users": 898765 },
	{ month: "Jun 2024", "Total users": 1389012, "Active users": 912345 },
	{ month: "Jul 2024", "Total users": 1310345, "Active users": 925678 },
	{ month: "Aug 2024", "Total users": 1332678, "Active users": 938901 },
	{ month: "Sep 2024", "Total users": 1354987, "Active users": 1056342 }
]

export const REVENUE_DISTRIBUTION = [
	{ source: "subscriptions", revenue: 4567890.12, fill: "#2762D9" },
	{ source: "ads", revenue: 1666677.77, fill: "#2EB78A" },
	{ source: "partnerships", revenue: 986578.53, fill: "#E88C30" },
	{ source: "integrations", revenue: 1248986.14, fill: "#AF57DB" },
]

export const TOP_STREAMING_SONGS = [
	{ name: "Viva la Vida", artist: "Coldplay", "Stream count": 1234567 },
	{ name: "Skyfall", artist: "Adele", "Stream count": 987654 },
	{ name: "Bohemian Rhapsody", artist: "Queen", "Stream count": 876543 },
	{ name: "Hey Jude", artist: "The Beatles", "Stream count": 765432 },
	{ name: "Watermelon Sugar", artist: "Harry Styles", "Stream count": 654321 }
]

export const RECENT_STREAMS = [
	{ songName: "Anti-Hero", artist: "Taylor Swift", streamDate: "2024-09-01", streamCount: 2345, userId: "user123" },
	{ songName: "As It Was", artist: "Harry Styles", streamDate: "2024-09-02", streamCount: 1987, userId: "user456" },
	{ songName: "About Damn Time", artist: "Lizzo", streamDate: "2024-09-03", streamCount: 1654, userId: "user789" },
	{ songName: "As the World Caves In", artist: "Sarah Cothran", streamDate: "2024-09-04", streamCount: 1345, userId: "user101" },
	{ songName: "Watermelon Sugar", artist: "Harry Styles", streamDate: "2024-09-05", streamCount: 1098, userId: "user112" },
	{ songName: "As It Was", artist: "Harry Styles", streamDate: "2024-09-06", streamCount: 987, userId: "user123" },
	{ songName: "Anti-Hero", artist: "Taylor Swift", streamDate: "2024-09-07", streamCount: 876, userId: "user456" },
	{ songName: "About Damn Time", artist: "Lizzo", streamDate: "2024-09-08", streamCount: 765, userId: "user789" },
	{ songName: "Blinding Lights", artist: "The Weeknd", streamDate: "2024-09-09", streamCount: 2156, userId: "user234" },
	{ songName: "Shape of You", artist: "Ed Sheeran", streamDate: "2024-09-10", streamCount: 1876, userId: "user345" },
	{ songName: "Dance Monkey", artist: "Tones and I", streamDate: "2024-09-11", streamCount: 1543, userId: "user456" },
	{ songName: "Someone You Loved", artist: "Lewis Capaldi", streamDate: "2024-09-12", streamCount: 1432, userId: "user567" },
	{ songName: "Levitating", artist: "Dua Lipa", streamDate: "2024-09-13", streamCount: 1321, userId: "user678" },
	{ songName: "Drivers License", artist: "Olivia Rodrigo", streamDate: "2024-09-14", streamCount: 1210, userId: "user789" },
	{ songName: "Stay", artist: "The Kid LAROI & Justin Bieber", streamDate: "2024-09-15", streamCount: 1109, userId: "user890" },
]

export const CAMPAIGN_DATA = [
	{ id: 1, name: "Summer Playlist Push", acquisitions: 5000, cost: 10000, ltv: 25000, roi: 150 },
	{ id: 2, name: "New Artist Spotlight", acquisitions: 3000, cost: 5000, ltv: 15000, roi: 200 },
	{ id: 3, name: "Genre Expansion", acquisitions: 2000, cost: 4000, ltv: 10000, roi: 150 },
	{ id: 4, name: "Referral Program", acquisitions: 4000, cost: 2000, ltv: 20000, roi: 900 },
	{ id: 5, name: "Holiday Special", acquisitions: 6000, cost: 12000, ltv: 30000, roi: 150 },
]
