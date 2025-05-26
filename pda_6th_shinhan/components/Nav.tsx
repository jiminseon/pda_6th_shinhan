import Image from "next/image"

export default function Nav() {
  return (
    <div className="w-[980px] bg-white shadow">
      {/* 상단 네비게이션 바 */}
      <div className="max-w-[980px] mx-auto flex flex-row items-center h-16 pl-6">
        {/* 왼쪽 메뉴들 */}
        <div className="flex flex-row gap-10 text-base font-black text-gray-800 flex-grow">
          <span>나의 자산분석</span>
          <span>자산관리몰</span>
          <span>연금자산</span>
          <span>트레이딩</span>
          <span>투자정보</span>
          <span>뱅킹/공모주/업무</span>
          <span>고객센터</span>
        </div>

        {/* 오른쪽 파란 버튼들 */}
        <div className="flex flex-row">
          <button className="w-16 h-16 flex items-center justify-center bg-[#009cde] hover:bg-[#0070c0]">
            <Image src="/person.png" alt="로그인" width={28} height={28} />
          </button>
          <button className="w-16 h-16 flex items-center justify-center bg-[#009cde] hover:bg-[#0070c0] border-l border-white/20">
            <Image src="/read_glases.png" alt="검색" width={28} height={28} />
          </button>
          <button className="w-16 h-16 flex items-center justify-center bg-[#009cde] hover:bg-[#0070c0] border-l border-white/20">
            <Image src="/list_bar.png" alt="메뉴" width={28} height={28} />
          </button>
        </div>
      </div>

      {/* 하단 서브 메뉴 바 */}
      <div className="w-[980px] h-9 flex items-center bg-gray-200/80 border-t border-gray-200">
        <div className="flex items-center gap-2 pl-4 pr-4 border-r border-gray-300 h-full">
          <Image src="/home2.png" alt="홈" width={18} height={18} />
        </div>
        <div className="flex items-center px-4 text-gray-800 font-medium text-sm relative">
          트레이딩
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <div className="flex items-center gap-3 ml-auto pr-4">
          <Image src="/mini-menu/menu-midd.png" alt="메뉴 중간" width={18} height={18} />
          <Image src="/mini-menu/star.png" alt="즐겨찾기" width={18} height={18} />
          <Image src="/mini-menu/textplus.png" alt="글자 확대" width={18} height={18} />
        </div>
      </div>

    </div>
  )
}
