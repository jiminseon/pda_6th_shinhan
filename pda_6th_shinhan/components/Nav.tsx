"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const menuItems = [
  "나의 자산분석",
  "자산관리몰",
  "연금자산",
  "트레이딩",
  "투자정보",
  "뱅킹/공모주/업무",
  "고객센터",
]

const subMenuData: Record<string, Array<{ title: string; items: string[] }>> = {
  "나의 자산분석": [
    {
      title: "나의 자산현황",
      items: [
        "투자현황 요약",
        "보유펀드 수익률현황",
        "보유종목 수익률현황",
        "전체좌현황",
      ],
    },
    {
      title: "잔고",
      items: [
        "총자산평가",
        "주식/선물옵션",
        "금융상품",
        "CMA잔고",
        "외화자산잔고",
      ],
    },
    {
      title: "거래내역",
      items: [
        "입출금(고)내역",
        "체크카드사용내역",
        "주식거래내역",
        "금융상품거래내역",
        "종합거래내역",
        "금융소득내역서",
        "통장거래내역",
      ],
    },
  ],
  "자산관리몰": [
    {
      title: "자산관리몰한눈에 보기",
      items: [
        "세제혜택 상품은?",
        "연령별, 운용사별 인기 판매상품",
        "내게 맞는 맞춤형 서비스는?",
      ],
    },
    {
      title: "펀드",
      items: [
        "펀드랭킹",
        "해외주식투자전용펀드",
        "코스닥벤처펀드",
        "펀드검색",
        "펀드매매",
        "펀드업무",
        "금융상품 제안하기",
      ],
    },
    {
      title: "CMA",
      items: [
        "신한명품 CMA소개",
        "이용안내 및 혜택",
        "CMA 신용카드",
        "CMA 체크카드",
        "사업자전용 CMA",
        "CMA R+ 카드 서비스",
      ],
    },
  ],
  "연금자산": [
    {
      title: "연금자산한눈에 보기",
      items: ["NEW 퇴직연금 바로가기!"],
    },
    {
      title: "나의 연금",
      items: [
        "연금 총 자산현황",
        "나의 연금저축",
        "연금저축 수익률현황",
        "연금저축 입금",
        "연금저축 출금",
        "자동이체 조회/관리",
      ],
    },
    {
      title: "개인연금",
      items: [
        "연금저축 안내",
        "연금저축 비교공시",
        "연금저축 서비스",
        "IRP안내",
        "연금저축 업무",
      ],
    },
  ],
  "트레이딩": [
    {
      title: "트레이딩",
      items: [
        "트레이딩한눈에 보기",
        "보다 편리해진 웹트레이딩(WTS)",
        "글로벌 투자상품",
        "다양한 투자정보 바로가기",
        "트레이딩 채널 다운로드"
      ]
    },
    {
      title: "국내주식",
      items: [
        "주식시세",
        "주문/체결",
        "분석정보",
        "투자정보",
        "ELW/금현물",
        "계좌정보",
        "평균(매입)단가변경"
      ]
    },
    {
      title: "해외주식",
      items: [
        "업무안내",
        "시장별 유의사항",
        "글로벌시황",
        "해외주식정보",
        "공지사항"
      ]
    },
    {
      title: "해외파생",
      items: [
        "한눈에 보는 해외파생",
        "신규고객 가이드",
        "해외파생",
        "업무안내",
        "투자정보",
        "공지사항"
      ]
    },
    {
      title: "국내선물/옵션",
      items: [
        "선물옵션 시작하기",
        "상품소개"
      ]
    },
    {
      title: "ETN",
      items: ["ETN"]
    },
    {
      title: "트레이딩 채널안내",
      items: [
        "채널별 안내 및 다운로드",
        "홈트레이딩",
        "모바일트레이딩",
        "웹트레이딩",
        "ARS트레이딩"
      ]
    },
    {
      title: "기타시장안내",
      items: ["KRX금시장", "CFD안내"]
    }
  ],
  "투자정보": [
    {
      title: "투자정보",
      items: [
        "투자정보한눈에 보기",
        "최근 투자트렌드, 이달의 자산배분 전략은?",
        "해외시장 투자전략은?",
        "종목발굴을 위한 알찬 투자정보!",
        "애널리스트 소개"
      ]
    },
    {
      title: "투자가이드",
      items: [
        "신한 생각",
        "기획 분석",
        "주식 용어 가이드"
      ]
    },
    {
      title: "기업분석",
      items: [
        "기업분석",
        "산업분석",
        "비상장분석",
        "기타"
      ]
    },
    {
      title: "투자전략",
      items: [
        "경제 및 외환시장",
        "국내외 채권전략",
        "국내외 크레딧전략",
        "대체자산전략",
        "주식전략",
        "해외 산업 및 기업분석",
        "ESG·퀀트",
        "이슈 및 섹터 스케줄"
      ]
    },
    {
      title: "(구)리서치 게시판",
      items: [
        "글로벌 이슈",
        "의무리포트",
        "KONEX 기업소개",
        "탐방속보",
        "외환(FX) 시장",
        "상품(Commodity 시장)",
        "자산배분전략",
        "마켓이슈",
        "중국 주식/경제",
        "계량분석",
        "ETF"
      ]
    }
  ],
  "뱅킹/공모주/업무": [
    {
      title: "뱅킹",
      items: [
        "이체",
        "자동이체",
        "주식출고",
        "이체계좌관리",
        "안심출금 서비스",
        "지연이체 서비스 관리",
        "바이오정보 이용 CD기 인출서비스"
      ]
    },
    {
      title: "권리/공모주",
      items: [
        "청약 가이드",
        "청약 일정별 유의사항",
        "진행중인 청약 및 청약경쟁률",
        "증시캘린더",
        "권리조회/신청",
        "공모주/실권주 청약",
        "유상(예약)청약",
        "공모채권청약",
        "사채청약",
        "공모주 환매청구권행사"
      ]
    },
    {
      title: "대출/신용/대차",
      items: [
        "대출",
        "신용",
        "주식대여",
        "주식차입",
        "제휴대출",
        "채권대여",
        "종목등급변경",
        "신용공여 금리산정체계"
      ]
    },
    {
      title: "지로/공과금",
      items: [
        "지로/공과금 안내",
        "지로요금",
        "공과금/생활요금",
        "납부 조회/관리",
        "수표조회",
        "지로/공과금 FAQ"
      ]
    },
    {
      title: "서비스신청",
      items: [
        "개인전문투자자 심사",
        "알리미 서비스",
        "증명서 발급",
        "혜택 서비스",
        "컨설턴트 서비스",
        "신한카드 복지연금 운용지시",
        "주문위임 연장/해지",
        "우리사주취득자금대출",
        "투자자문사"
      ]
    },
    {
      title: "거래신청",
      items: [
        "CMA 계좌관리",
        "원화RP 거래등록",
        "외화RP 이용신청",
        "거래승인",
        "제휴은행계좌 약관승인",
        "선물옵션 계좌유형 설정",
        "파생상품 상품등록",
        "우리사주조합"
      ]
    }
  ],
  "고객센터": [
    {
      title: "계좌개설/ID등록",
      items: [
        "계좌개설 안내",
        "모바일 계좌개설",
        "영업점 방문개설",
        "제휴은행 방문개설",
        "ID등록",
        "ID관리"
      ]
    },
    {
      title: "인증서/OTP",
      items: [
        "공동인증서",
        "공동인증서(클라우드)",
        "금융인증서",
        "간편인증",
        "스마트폰 인증서 복사",
        "OTP카드 관리",
        "휴대폰 1회용 인증서",
        "원격제어"
      ]
    },
    {
      title: "업무안내",
      items: [
        "업무시간/영업점(지점) 위치",
        "수수료",
        "입출금",
        "입출고",
        "청약",
        "대출/신용",
        "증거금",
        "약관 및 유의사항",
        "채무조정 안내",
        "상속 안내"
      ]
    },
    {
      title: "서비스혜택안내",
      items: [
        "온라인서비스안내",
        "신한 슈퍼SOL",
        "FNA S-MORE 포인트",
        "프로/킹스클럽",
        "FNA",
        "컨설턴트 서비스",
        "DMA 서비스",
        "신한 Premier 멤버십"
      ]
    },
    {
      title: "상담/문의",
      items: [
        "상담/문의 안내",
        "고객상담",
        "자주 묻는 질문",
        "통합연금포털 오류접수",
        "(구)1:1상담내역",
        "(구)제안하기내역",
        "(구)불편신고"
      ]
    },
    {
      title: "새소식/이벤트",
      items: [
        "새소식",
        "이벤트",
        "퇴직연금 공지사항",
        "준법감시 공시사항"
      ]
    }
  ]
}
export default function Nav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleMenuClick = (menu: string) => {
    setActiveMenu(prev => (prev === menu ? null : menu))
  }

  return (
    <div className="relative w-[980px] mx-auto bg-white shadow z-10">
      {/* 상단 메뉴 */}
      <div className="flex items-center h-16 pl-6 relative z-20">
        <div className="flex gap-10 text-base font-black text-gray-800 flex-grow">
          {menuItems.map(item => (
            <span
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`cursor-pointer relative transition duration-200
                ${activeMenu === item ? "text-[#0070c0]" : "hover:text-[#0070c0]"}`}
            >
              {item}
              {activeMenu === item && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-[#0070c0]" />
              )}
            </span>
          ))}
        </div>

        {/* 오른쪽 아이콘 */}
        <div className="flex">
          {["/person.png", "/read_glases.png", "/list_bar.png"].map((src, i) => (
            <button
              key={i}
              className="w-16 h-16 flex items-center justify-center 
                bg-[#009cde] hover:bg-[#0070c0] border-l border-white/20"
            >
              <Image src={src} alt={`icon-${i}`} width={28} height={28} />
            </button>
          ))}
        </div>
      </div>

            {/* 보조 네비게이션 바 */}
            <div className="w-[980px] h-9 flex items-center bg-gray-200/80 border-t border-gray-200">
        <div className="flex items-center gap-2 pl-4 pr-4 border-r border-gray-300 h-full cursor-pointer hover:font-semibold">
          <Image src="/home2.png" alt="홈" width={18} height={18} />
        </div>

        <div className="flex items-center px-4 text-gray-800 font-medium text-sm relative cursor-pointer hover:font-semibold">
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
          <div className="cursor-pointer hover:font-semibold">
            <Image src="/mini-menu/menu-midd.png" alt="메뉴 중간" width={18} height={18} />
          </div>
          <div className="cursor-pointer hover:font-semibold">
            <Image src="/mini-menu/star.png" alt="즐겨찾기" width={18} height={18} />
          </div>
          <div className="cursor-pointer hover:font-semibold">
            <Image src="/mini-menu/textplus.png" alt="글자 확대" width={18} height={18} />
          </div>
        </div>
      </div>

      {/* 하위 메뉴 슬라이드 (절대 위치) */}
      <AnimatePresence mode="wait">
        {activeMenu && subMenuData[activeMenu] && (
          <motion.div
            key={activeMenu}
            className="absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="w-[980px] mx-auto py-6 px-4 text-sm w-full items-center">
              {/* 상단 제목 */}
              <div className="w-[980px] mx-auto py-6 px-4 text-sm w-full items-center">
              {/* 상단 제목 */}
              <div className="flex items-center justify-center mb-6 space-x-3">
                {/* 제목 */}
                <h2 className="text-3xl font-extrabold text-[#002f87] leading-snug">
                  자산관리몰
                </h2>

                {/* 버튼 */}
                <a
                  href="#"
                  className="inline-flex items-center justify-between border border-gray-400 text-sm px-3 py-1 rounded-sm hover:bg-gray-100"
                >
                  한눈에 보기 <span className="ml-1">{'>'}</span>
                </a>
              </div>
            </div>
            

              {/* 하단: 이미지 + 메뉴 */}
              <div className="flex">
                {/* 왼쪽 이미지 */}
                <div className="w-[200px] shrink-0 mr-8">
                  <Image
                    src="/popupPage.jpg"
                    alt="Popup Image"
                    width={200}
                    height={440}
                    className="rounded-md object-cover h-[440px]"
                    priority
                  />
                </div>

                {/* 오른쪽: 한눈에 보기 + 메뉴 리스트 */}
                <div className="flex-1">
                  {/* "한눈에 보기" 버튼 */}

                  {/* 메뉴 리스트 */}
                  <div className="flex flex-wrap gap-12">
                    {subMenuData[activeMenu].map((col, i) => (
                      <div key={i} className="min-w-[160px]">
                        <div className="font-bold mb-2 text-gray-800 text-2xl">{col.title}</div>
                        <ul className="space-y-1 text-gray-600 text-[15px]">
                          {col.items.map((text, j) => (
                            <li key={j} className="cursor-pointer hover:text-[#0070c0]">
                              {text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}