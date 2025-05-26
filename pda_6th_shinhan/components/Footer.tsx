export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
        {/* Left Section - Customer Service */}
        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          <div className="space-y-2 min-w-[200px]">
            <p className="text-sm text-gray-600">고객지원센터</p>
            <p className="text-3xl font-bold text-blue-600">1588-0365</p>
            <p className="text-sm text-gray-600">말로하는 AI 상담서비스</p>
            <p className="text-sm text-gray-600">24시간 챗봇 상담(신한 SOL증권)</p>
          </div>
          <div className="space-y-1 min-w-[180px]">
            <p className="whitespace-nowrap">• 해외주식상담센터 02-3772-2525</p>
            <p className="whitespace-nowrap">• 해외파생팀 02-3772-4365</p>
            <p className="whitespace-nowrap">• 해외사용자 ARS</p>
            <p className="ml-4 whitespace-nowrap">82-2-6255-4510 (유료)</p>
          </div>

          <div className="space-y-1 min-w-[180px]">
            <p className="whitespace-nowrap">• 연금자산관리센터 1588-1122</p>
            <p className="whitespace-nowrap">• 디지털PB센터 02-3772-1010</p>
            <p className="whitespace-nowrap">• 이벤트 전용센터 02-3772-2220</p>
            <p className="whitespace-nowrap">• 시니어전용 상담센터</p>
            <p className="ml-4">02-3772-1001</p>
          </div>
        </div>

        {/* Right Section - Service Icons */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-1">
            {/* 아이콘 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">원격제어</div>
            </div>
            {/* 아이콘 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">FAQ</div>
            </div>
            {/* 아이콘 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">1:1상담</div>
            </div>
            {/* 아이콘 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">업무안내</div>
            </div>
          </div>
        </div>
      </div>


        {/* Divider */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
          {/* Left Links */}
          <div className="flex items-center gap-4 text-sm">
            <span>회사소개</span>
            <span>|</span>
            <span>EN</span>
            <div className="flex items-center gap-2">
              <span>Family Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">b</span>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
              <span className="text-white text-xs">💬</span>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
              <span className="text-white text-xs">▶</span>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
              <span className="text-white text-xs">📷</span>
            </div>
          </div>
        </div>

        {/* Service Links */}
        <div className="mt-6 text-xs text-gray-600">
          <div className="flex flex-wrap gap-4 mb-2">
            <span>인증센터</span>
            <span>•</span>
            <span>트레이딩 다운로드</span>
            <span>•</span>
            <span>보안센터</span>
            <span>•</span>
            <span>지점안내</span>
            <span>•</span>
            <span>전자민원신청</span>
            <span>•</span>
            <span>홈페이지참조회</span>
            <span>•</span>
            <span>금융상품 통합비교공시</span>
            <span>•</span>
            <span>내부고발제도</span>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <span>개인정보처리방침</span>
            <span>•</span>
            <span>신용정보활용체제</span>
            <span>•</span>
            <span>약관 및 유의사항</span>
            <span>•</span>
            <span>보호금융상품등록부</span>
            <span>•</span>
            <span>금융투자소득세포털</span>
            <span>•</span>
            <span>투자권유대행인</span>
            <span>•</span>
            <span>사이트맵</span>
          </div>
        </div>

        {/* Company Information */}
        <div className="text-xs text-gray-600 mb-4">
          <div className="mb-1">
            서울특별시 영등포구 의사당대로 96 (여의도동,TP Tower) | 대표이사 이선호 | 사업자등록번호 116-81-36684
          </div>
          <div>COPYRIGHT©2016 SHINHAN SECURITIES CO.,LTD. All Rights Reserved.</div>
        </div>

        {/* Awards Section */}
        <div className="flex justify-end items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="footer_logo.png"/>
          </div>
        </div>
      </div>
    </footer>
  )
}
