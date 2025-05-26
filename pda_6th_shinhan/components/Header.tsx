import Image from "next/image"

export default function Header() {
  return (
    <div className="w-full bg-white bg-opacity-90 border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex flex-row items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-3">
          <Image src="/logo_shinhan.png" alt="신한투자증권 로고" width={36} height={36} className="h-9 w-9" priority />
          <span className="text-2xl font-bold text-[#0050a0]">신한투자증권</span>
        </div>
        <div className="flex items-center space-x-6 text-gray-700 text-sm">
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
          <button className="p-2"><svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#0050a0" strokeWidth="2"/></svg></button>
          <button className="p-2"><svg width="20" height="20" fill="none"><rect x="4" y="9" width="12" height="2" rx="1" fill="#0050a0"/></svg></button>
        </div>
      </div>
    </div>
  )
} 