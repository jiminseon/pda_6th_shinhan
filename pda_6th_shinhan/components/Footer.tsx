'use client';

import { useState } from "react"

export default function Footer() {

  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false)

  const familySiteLinks = [
    { name: "신한금융지주", url: "https://www.shinhangroup.com" },
    { name: "신한은행", url: "https://www.shinhan.com" },
    { name: "신한카드", url: "https://www.shinhancard.com" },
    { name: "신한라이프", url: "https://www.shinhanlife.co.kr" },
    { name: "신한캐피탈", url: "https://www.shinhancapital.co.kr" },
    { name: "신한저축은행", url: "https://www.shinhansavingsbank.co.kr" },
    { name: "신한아이타스", url: "https://www.shinhanitas.com" },
    { name: "신한DS", url: "https://www.shinhands.co.kr" },
  ]

  return (
    <footer className="w-full  bg-gray-50 border-t mt-12">
      <div className="max-w-[980px] mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
        {/* Left Section - Customer Service */}
        <div className="flex flex-col lg:flex-row gap-4 flex-1">
          <div className="space-y-1 min-w-[170px]">
            <p className="text-sm font-semibold">고객지원센터</p>
            <p className="text-[32px] text-blue-600" style={{color : "#1598dc"}}>1588-0365</p>
            <p className="text-xs text-gray-600">말로하는 AI 상담서비스</p>
            <p className="text-xs text-gray-600">24시간 챗봇 상담(신한 SOL증권)</p>
          </div>
          <div className="min-w-[180px]">
            <p className="whitespace-nowrap text-darkgray text-sm">• 해외주식상담센터 02-3772-2525</p>
            <p className="mt-2 whitespace-nowrap text-darkgray text-sm">• 해외파생팀 02-3772-4365</p>
            <p className="mt-2 whitespace-nowrap text-darkgray text-sm">• 해외사용자 ARS</p>
            <p className="ml-4 whitespace-nowrap text-darkgray text-sm">82-2-6255-4510 (유료)</p>
          </div>

          <div className="min-w-[180px]">
            <p className="whitespace-nowrap text-darkgray text-sm">• 연금자산관리센터 1588-1122</p>
            <p className="mt-2 whitespace-nowrap text-darkgray text-sm">• 디지털PB센터 02-3772-1010</p>
            <p className="mt-2 whitespace-nowrap text-darkgray text-sm">• 이벤트 전용센터 02-3772-2220</p>
            <p className="mt-2 whitespace-nowrap text-darkgray text-sm">• 시니어전용 상담센터</p>
            <p className="ml-4 text-darkgray text-sm">02-3772-1001</p>
          </div>
        </div>

        {/* Right Section - Service Icons */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-1">
            {/* 아이콘 1 */}
            <div className="text-center">
              <div >
                <a href="https://rsp.shinhansec.com/"><img src="control.png" className="w-16 flex items-center justify-center mx-auto mb-2"/></a>
              </div>
              <a href="https://rsp.shinhansec.com/"><div className="text-xs text-gray-700 cursor-pointer hover:underline">원격제어</div></a>
            </div>
            {/* 아이콘 2 */}
            <div className="text-center">
              <div>
                <a href="https://www.shinhansec.com/siw/customer-center/advise/faq/view.do"><img src="faq.png" className="w-12 flex items-center justify-center mx-auto mb-2"/></a>
              </div>
              <div className="text-xs text-gray-700 cursor-pointer hover:underline">FAQ</div>
            </div>
            {/* 아이콘 3 */}
            <div className="text-center">
              <div>
                <a href="https://www.shinhansec.com/siw/etc/login/view.do?returnUrl=/siw/customer-center/advise/newvocWrite/view.do"><img src="consult.png" className="w-12 flex items-center justify-center mx-auto mb-2"/></a>
              </div>
              <div className="text-xs text-gray-700 cursor-pointer hover:underline">1:1상담</div>
            </div>
            {/* 아이콘 4 */}
            <div className="text-center">
              <div>
                <a href="https://www.shinhansec.com/siw/customer-center/guide/business_guide_time/contents.do"><img src="explain.png" className="w-12 flex items-center justify-center mx-auto mb-2"/></a>
              </div>
              <div className="text-xs text-gray-700 cursor-pointer hover:underline">업무안내</div>
            </div>
          </div>
        </div>
      </div>


      {/* Divider */}
      <div className="border-t border-b border-gray-300">
        {/* Bottom Section */}
        <div className="flex justify-between items-center h-10 px-4">
          {/* Left Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="https://open.shinhansec.com/new_ir/main.jsp" target='_blank'><span className="cursor-pointer hover:underline">회사소개</span></a>
            <span>|</span>
            <a href="https://open.shinhansec.com/new_eng/" target='_blank'><span className="cursor-pointer hover:underline">EN</span></a>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-4 ">
            {/* Family Site Dropdown */}
            <div className="relative h-10 w-56 bg-gray-200">
              <button
                className="w-full h-full flex items-center justify-between px-3"
                onClick={() => setIsFamilySiteOpen(!isFamilySiteOpen)}
              >
                <span className="text-darkgray text-sm">Family Site</span>
                <svg
                  className={`w-4 h-4 rotate-180`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isFamilySiteOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="max-h-48 overflow-y-auto bg-gray-200">
                    <div className="p-2">
                      {familySiteLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-2 text-sm hover:bg-gray-100 hover:underline rounded"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* SNS Icons */}
            <div className="flex items-center gap-2 pl-10">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <a href="https://www.facebook.com/shinhansecurities" target='_blank'><img src="facebook.png"/></a>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <a href="https://blog.naver.com/shinhansec_official" target='_blank'><img src="blog.png"/></a>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <a href="https://pf.kakao.com/_xdnLFd" target='_blank'><img src="kakao.png"/></a>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <a href="https://www.youtube.com/user/shinhaninvest" target='_blank'><img src="youtube.png"/></a>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <a href="https://www.instagram.com/shinhansec_official/#" target='_blank'><img src="insta.png"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Service Links */}
        <div className="w-full py-6 ">
          <div className="max-w-6xl relative">
            {/* 텍스트 정보 전체를 왼쪽에 */}
            <div className="text-xs text-gray-600">
              {/* 상단 링크 */}
              <div className="flex flex-wrap gap-2 mb-2">
                <a href="https://www.shinhansec.com/siw/customer-center/certification/730000/view.do" className="cursor-pointer hover:underline"><span>인증센터</span></a>
                <span>•</span><a href="https://www.shinhansec.com/siw/customer-center/channel/channel_intro/contents.do" className="cursor-pointer hover:underline"><span>트레이딩 다운로드</span></a>
                <span>•</span><a href="https://www.shinhansec.com/siw/customer-center/security/731701V01/contents.do" className="cursor-pointer hover:underline"><span>보안센터</span></a>
                <span>•</span><a href="https://open.shinhansec.com/new_ir/business/business_01.jsp" target="_blank" className="cursor-pointer hover:underline"><span>지점망안내</span></a>
                <span>•</span><a href="https://www.shinhansec.com/siw/customer-center/protection/claim_apply/contents.do" className="cursor-pointer hover:underline"><span>전자민원신청</span></a>
                <span>•</span><a href="https://www.shinhansec.com/wizvera/veraport/install20/install_web.html?P_name=ASTx&url=%2Fsiw%2Fbanking-lending%2Fcustomer-info%2Fsleepy%2Fview.do" className="cursor-pointer hover:underline"><span>휴먼계좌조회</span></a>
                <span>•</span><a href="https://finlife.fss.or.kr/finlife/main/main.do?menuNo=700000" target="_blank" className="cursor-pointer hover:underline"><span>금융상품통합비교공시</span></a>
                <span>•</span><a href="https://open.shinhansec.com/new_ir/company/company_12.jsp" target="_blank" className="cursor-pointer hover:underline"><span>내부고발제도</span></a>
              </div>

              {/* 하단 링크 */}
              <div className="flex flex-wrap gap-2 mb-4">
                <a href="https://www.shinhansec.com/siw/customer-center/guide/business_guide_terms_tab6/contents.do" className="cursor-pointer hover:underline"><span className="text-blue-900">개인정보처리방침</span></a><span>•</span>
                <a href="https://www.shinhansec.com/siw/customer-center/guide/business_guide_terms_tab8/contents.do" className="cursor-pointer hover:underline"><span className="text-blue-900">신용정보활용체제</span></a><span>•</span>
                <a href="https://www.shinhansec.com/siw/customer-center/guide/business_guide_terms_tab1/contents.do" className="cursor-pointer hover:underline"><span>약관 및 유의사항</span></a>
                <span>•</span><a href="https://www.shinhansec.com/siw/customer-center/guide/business_guide_terms_tab5/contents.do" className="cursor-pointer hover:underline"><span>보호금융상품등록부</span></a><span>•</span>
                <a href="https://www.shinhansec.com/siw/etc/tax_portal/contents.do" target="_blank" className="cursor-pointer hover:underline"><span>금융투자소득세포털</span></a><span>•</span><a href="https://open.shinhansec.com/new_ir/recruit/recruit_05_02.jsp" target="_blank" className="cursor-pointer hover:underline"><span>투자권유대행인</span></a><span>•</span>
                <span>사이트맵</span>
              </div>

              {/* 회사 정보 */}
              <div className="mb-1">
                서울특별시 영등포구 의사당대로 96 (여의도동,TP Tower) | 대표이사 이선호 | 사업자등록번호 116-81-36684
              </div>
              <p>COPYRIGHT©2016 SHINHAN SECURITIES CO.,LTD. All Rights Reserved.</p>
            </div>

            {/* 오른쪽 하단 로고 이미지 */}
            <div className="absolute right-0 bottom-0">
              <img src="footer_logo.png" className="w-36" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
