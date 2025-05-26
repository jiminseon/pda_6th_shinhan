import Image from "next/image"

export default function RightPanel() {
  return (
    <div className="flex-shrink-0 flex flex-col gap-6 mt-[108px]" style={{ width: 250, height: 310 }}>
      <div className="bg-[#1a2233cc] rounded-xl shadow p-6 text-white h-full flex flex-col justify-between">
        <div>
          <div className="font-bold text-lg mb-2">새로운 웹트레이딩 시스템</div>
          <div className="text-xs mb-4 text-gray-300">(크롬, Edge, IE100이상)</div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <Image src="/book.png" alt="WTS 신버전" width={48} height={48} />
              <div className="mt-2 text-base">WTS 신버전</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/out.png" alt="WTS 소개" width={48} height={48} />
              <div className="mt-2 text-base">WTS 소개</div>
            </div>
          </div>
        </div>
        <div className="text-xs opacity-80 border-t border-white/20 pt-2 mt-2 text-center">신한 SOL증권 소개 | 신한 SOL(HTS) 소개</div>
      </div>
    </div>
  )
} 