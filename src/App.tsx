import Navbar from "./components/common/Navbar";
import SidebarApp from "./components/common/Sidebar";
import KeyMetrics from "./components/KeyMetrics";
import RevenueDistribution from "./components/RevenueDistribution";
import TopStreamedSongs from "./components/TopStreamedSongs";
import UserGrowth from "./components/UserGrowth";

export default function App() {
  return (
    <div
      className=
      "flex flex-col flex-1 w-full mx-auto overflow-hidden bg-gray-100 border rounded-md md:flex-row border-neutral-200"
    >
      <SidebarApp />
      <main className="flex flex-col flex-1 w-full gap-6 p-4 mx-auto max-w-7xl md:gap-8 lg:gap-10">
        <Navbar />
        <KeyMetrics />
        <UserGrowth />
        <RevenueDistribution />
        <TopStreamedSongs />
      </main>
    </div>
  )
}
