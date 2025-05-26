export default function Nav() {
  return (
    <div className="w-full ">
      <div className="max-w-[1200px] mx-auto flex flex-row items-center h-16 px-6">
        {/* 메뉴 영역: 왼쪽 정렬, flex-grow */}
        <div className="flex flex-row gap-10 text-base font-semibold text-gray-800 flex-grow">
          <span>나의 자산분석</span>
          <span>자산관리몰</span>
          <span>연금자산</span>
          <span>트레이딩</span>
          <span>투자정보</span>
          <span>뱅킹/공모주/업무</span>
          <span>고객센터</span>
        </div>
        {/* 우측 파란 버튼 3개: 딱 붙게 */}
        <div className="flex flex-row">
          <button className="w-16 h-16 flex items-center justify-center bg-[#009cde] hover:bg-[#0070c0]">
            <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="10" stroke="white" strokeWidth="2"/></svg>
          </button>
          <button className="w-16 h-16 flex items-center justify-center bg-[#009cde] hover:bg-[#0070c0] border-l border-white/20">
            <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="10" stroke="white" strokeWidth="2"/><line x1="8" y1="14" x2="20" y2="14" stroke="white" strokeWidth="2"/></svg>
          </button>
          <button className="w-16 h-16 flex items-center justify-center bg-[#009cde] hover:bg-[#0070c0] border-l border-white/20">
            <svg width="28" height="28" fill="none"><rect x="8" y="13" width="12" height="2" rx="1" fill="white"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
} 