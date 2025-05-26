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
      <div className="bg-white bg-opacity-90 rounded-xl shadow p-6">
        <div className="font-bold mb-2">라이브 자산관리</div>
        <div className="font-bold mb-4">플랫폼 신한 SOL증권</div>
        <div className="text-xs mb-4">누구나 쉽게 자산관리<br/>제대로 투자하는 신한 SOL증권</div>
        <button className="bg-[#0050a0] text-white rounded px-3 py-1 text-xs font-semibold">자세히보기</button>
      </div>
    </div>
  )
} 