import Header from "@/components/Header"
import Nav from "@/components/Nav"
import MainIndices from "@/components/MainIndices"
import StrategySection from "@/components/StrategySection"
import RightPanel from "@/components/RightPanel"
import BottomSection from "@/components/BottomSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      <Header />
      <Nav />
      <div
        className="w-full flex flex-col md:flex-row max-w-[1200px] mt-8 px-2 md:px-6 gap-8"
        style={{
          backgroundImage: 'url(https://www.shinhansec.com/siw/common/images/trading/bg_main_visual.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: 24,
        }}
      >
        <div className="flex-1 min-w-0">
          <MainIndices />
        </div>
        <div className="w-full md:w-[340px] flex-shrink-0">
          <RightPanel />
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-white">
        <div className="w-full max-w-[1200px] px-2 md:px-6">
          <StrategySection />
          <BottomSection />
        </div>
        <Footer />
      </div>
    </div>
  )
}
