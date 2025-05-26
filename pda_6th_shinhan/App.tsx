import { Header } from "./components/Header"
import { MarketIndices } from "./components/MarketIndices"
import { TodaysInvestmentStrategy } from "./components/TodaysInvestmentStrategy"
import { GlobalInvestmentStrategy } from "./components/GlobalInvestmentStrategy"
import { EventLinks } from "./components/EventLinks"
import { TopTradingVolume } from "./components/TopTradingVolume"
import "./App.css"

function App() {
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

export default App
