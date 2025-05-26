import Image from "next/image"

export default function Header() {
  return (
    <div className="w-full bg-opacity-90 pb-2">
      <div className="max-w-[980px] mx-auto flex flex-row items-center justify-between h-16 pt-4">
        <div className="flex items-center space-x-3">
          <Image src="/sinhan_logo.png" alt="" width={180} height={56} className="" priority />
        </div>
        <div className="flex items-center space-x-6 text-gray-700 text-[11px]">
          <span>로그인</span>
          <span>계좌개설</span>
          <span>고객센터</span>
          <span>이벤트</span>
          <span>신한Premier</span>
          <span>영문</span>
          <span>Tops Club</span>
          <span>신한금융그룹</span>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="text-[13px]">소비자 포털</strong>
          <strong className="text-[13px]">상품 공시실</strong>
        </div>
      </div>
    </div>
  )
} 