export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] border-t mt-12 py-8 text-xs text-gray-700">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <div className="font-bold text-base text-[#0050a0] mb-2">고객상담센터 1588-0365</div>
            <div className="mb-2">해외주식상담센터 02-3772-2525 · 퇴직연금상담센터 1588-1122</div>
            <div className="mb-2">해외선물옵션 02-3772-4366 · 신한금융투자 ARS 1544-8000</div>
            <div className="mb-2">상장지수펀드(ETF) 02-3772-2220 · 외화송금 82-2-6255-4510 (8:00~16:00)</div>
            <div className="mb-2">서울특별시 영등포구 여의대로 70 (여의도동, TP Tower) · 사업자등록번호 116-81-36864</div>
            <div className="mb-2">COPYRIGHTⓒ2025 SHINHAN SECURITIES CO.,LTD. All Rights Reserved.</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <a href="#" className="hover:underline">회사소개</a>
            <a href="#" className="hover:underline">EN</a>
            <a href="#" className="hover:underline">개인정보처리방침</a>
            <a href="#" className="hover:underline">이메일주소무단수집거부</a>
            <a href="#" className="hover:underline">고객권리안내문</a>
            <a href="#" className="hover:underline">신한금융그룹</a>
            <a href="#" className="hover:underline">Family Site</a>
            <span className="ml-2 flex gap-2">
              <a href="#" aria-label="facebook"><svg width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="8" /></svg></a>
              <a href="#" aria-label="youtube"><svg width="16" height="16" fill="currentColor"><rect x="2" y="5" width="12" height="6" rx="2" /></svg></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
} 