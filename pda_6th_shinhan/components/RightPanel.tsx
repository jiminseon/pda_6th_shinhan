export default function RightPanel() {
  return (
    <div className="w-[340px] flex-shrink-0 flex flex-col gap-6">
      <div className="bg-[#1a2233cc] rounded-xl shadow p-6 text-white">
        <div className="font-bold text-lg mb-2">새로운 웹트레이딩 시스템</div>
        <div className="text-xs mb-4">(크롬, Edge, IE100이상)</div>
        <div className="flex gap-2 mb-4">
          <button className="bg-white text-[#1a2233] rounded px-3 py-1 text-xs font-semibold">WTS 신버전</button>
          <button className="border border-white rounded px-3 py-1 text-xs font-semibold">WTS 소개</button>
        </div>
        <div className="text-xs opacity-80">신한 SOL증권 소개 | 신한 SOL(HTS) 소개</div>
      </div>
    </div>
  )
} 