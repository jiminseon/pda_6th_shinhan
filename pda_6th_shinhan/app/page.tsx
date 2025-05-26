import { Header } from "@/components/header"
import { MarketIndices } from "@/components/market-indices"
import { TodaysInvestmentStrategy } from "@/components/todays-investment-strategy"
import { GlobalInvestmentStrategy } from "@/components/global-investment-strategy"
import { EventLinks } from "@/components/event-links"
import { TopTradingVolume } from "@/components/top-trading-volume"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Indices */}
            <MarketIndices />

            {/* Investment Analysis Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TodaysInvestmentStrategy />
              <GlobalInvestmentStrategy />
            </div>

            {/* Stock Performance Tables */}
            <TopTradingVolume />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <EventLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
