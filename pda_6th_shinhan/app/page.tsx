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
      <div
        className="w-full flex flex-col items-center"
        style={{
          backgroundImage: 'url(https://www.shinhansec.com/siw/common/images/trading/bg_main_visual.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '764px',
        }}
      >
        <Header />
        <Nav />
        <div className="flex flex-col md:flex-row w-full max-w-[980px] mt-14 gap-8">
          <div className="flex-1 min-w-0">
            <MainIndices />
          </div>
          <div className="w-full md:w-[300px] pl-12 flex-shrink-0">
            <RightPanel />
          </div>
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
