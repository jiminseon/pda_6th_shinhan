import Image from "next/image"

export default function Header() {
  return (
    <div className="w-full bg-opacity-90 pb-2">
      <div className="max-w-[980px] mx-auto flex flex-row items-center justify-between h-16 pt-4 px-4">
        {/* 로고 영역 */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image
            src="/sinhan_logo.png"
            alt="신한로고"
            width={180}
            height={56}
            className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
            priority
          />
        </div>

        {/* 중앙 메뉴 (데스크탑만 표시) */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-700 text-[11px]">
          {[
            "로그인",
            "계좌개설",
            "고객센터",
            "이벤트",
            "신한Premier",
            "영문",
            "Tops Club",
            "신한금융그룹",
          ].map((item, index) => (
            <span key={index} className="hover:underline cursor-pointer whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>

        {/* 우측 텍스트 (작은 화면에서는 아이콘 처리 가능) */}
        <div className="hidden sm:flex items-center space-x-2">
          {["소비자 포털", "상품 공시실"].map((item, index) => (
            <strong key={index} className="text-[13px] font-normal hover:underline cursor-pointer whitespace-nowrap">
              {item}
            </strong>
          ))}
        </div>
      </div>
    </div>
  )
}
