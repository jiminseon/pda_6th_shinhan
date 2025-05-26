export default function BottomSection() {
  return (
    <div className="w-full mt-8 space-y-8">
      {/* 거래량 상위 */}
      <div>
        <div className="font-bold text-lg mb-2 flex items-center">거래량 상위 <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2 text-left">종목명</th>
              <th className="py-2 text-right">현재가</th>
              <th className="py-2 text-right">대비</th>
              <th className="py-2 text-right">등락률</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">KODEX 200선물인버스2X</td>
              <td className="text-right">2,030</td>
              <td className="text-right text-blue-600">- 50</td>
              <td className="text-right text-blue-600">-2.40 %</td>
            </tr>
            <tr>
              <td className="py-2">메디톡스</td>
              <td className="text-right">262</td>
              <td className="text-right text-red-600">▲ 46</td>
              <td className="text-right text-red-600">21.30 %</td>
            </tr>
            <tr>
              <td className="py-2">동양철관</td>
              <td className="text-right">1,430</td>
              <td className="text-right text-red-600">▲ 84</td>
              <td className="text-right text-red-600">6.24 %</td>
            </tr>
            <tr>
              <td className="py-2">우리기술</td>
              <td className="text-right">2,400</td>
              <td className="text-right text-red-600">▲ 40</td>
              <td className="text-right text-red-600">1.69 %</td>
            </tr>
            <tr>
              <td className="py-2">케이씨티</td>
              <td className="text-right">3,650</td>
              <td className="text-right text-red-600">▲ 235</td>
              <td className="text-right text-red-600">6.88 %</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 주가상승률 상위 */}
      <div>
        <div className="font-bold text-lg mb-2 flex items-center">주가상승률 상위 <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2 text-left">종목명</th>
              <th className="py-2 text-right">현재가</th>
              <th className="py-2 text-right">대비</th>
              <th className="py-2 text-right">등락률</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">브이원텍</td>
              <td className="text-right">5,130</td>
              <td className="text-right text-red-600">▲ 1,180</td>
              <td className="text-right text-red-600">29.87 %</td>
            </tr>
            <tr>
              <td className="py-2">그린플러스</td>
              <td className="text-right">3,720</td>
              <td className="text-right text-red-600">▲ 855</td>
              <td className="text-right text-red-600">29.84 %</td>
            </tr>
            <tr>
              <td className="py-2">라닉스</td>
              <td className="text-right">21,150</td>
              <td className="text-right text-red-600">▲ 4,850</td>
              <td className="text-right text-red-600">29.75 %</td>
            </tr>
            <tr>
              <td className="py-2">신성약품</td>
              <td className="text-right">19,980</td>
              <td className="text-right text-red-600">▲ 4,480</td>
              <td className="text-right text-red-600">28.90 %</td>
            </tr>
            <tr>
              <td className="py-2">파이아이</td>
              <td className="text-right">8,570</td>
              <td className="text-right text-red-600">▲ 1,860</td>
              <td className="text-right text-red-600">27.72 %</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 외국인 연속매수(순매수) */}
      <div>
        <div className="font-bold text-lg mb-2 flex items-center">외국인 연속매수(순매수) <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2 text-left">종목명</th>
              <th className="py-2 text-right">현재가</th>
              <th className="py-2 text-right">대비</th>
              <th className="py-2 text-right">연속일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">한국전력</td>
              <td className="text-right">31,450</td>
              <td className="text-right text-red-600">▲ 750</td>
              <td className="text-right">29</td>
            </tr>
            <tr>
              <td className="py-2">LG유플러스</td>
              <td className="text-right">12,740</td>
              <td className="text-right text-red-600">▲ 100</td>
              <td className="text-right">15</td>
            </tr>
            <tr>
              <td className="py-2">현대위아</td>
              <td className="text-right">40,500</td>
              <td className="text-right text-red-600">▲ 250</td>
              <td className="text-right">14</td>
            </tr>
            <tr>
              <td className="py-2">핸드소니션</td>
              <td className="text-right">12,890</td>
              <td className="text-right text-blue-600">- 80</td>
              <td className="text-right">14</td>
            </tr>
            <tr>
              <td className="py-2">세아특수강</td>
              <td className="text-right">13,510</td>
              <td className="text-right text-blue-600">- 10</td>
              <td className="text-right">14</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 리서치 추천 포트폴리오 */}
      <div>
        <div className="font-bold text-lg mb-2 flex items-center">리서치 추천 포트폴리오 <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b">
          <thead>
            <tr className="text-gray-500">
              <th className="py-2 text-left">종목명</th>
              <th className="py-2 text-right">현재가</th>
              <th className="py-2 text-right">편입일</th>
              <th className="py-2 text-right">수익률</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">소재산업</td>
              <td className="text-right">6,710</td>
              <td className="text-right">2025.05.14</td>
              <td className="text-right text-blue-600">-6.28 %</td>
            </tr>
            <tr>
              <td className="py-2">노스닉스</td>
              <td className="text-right">3,520</td>
              <td className="text-right">2025.05.09</td>
              <td className="text-right text-red-600">12.46 %</td>
            </tr>
            <tr>
              <td className="py-2">애니패스</td>
              <td className="text-right">3,530</td>
              <td className="text-right">2025.05.07</td>
              <td className="text-right text-blue-600">-8.07 %</td>
            </tr>
            <tr>
              <td className="py-2">SOOP</td>
              <td className="text-right">86,200</td>
              <td className="text-right">2025.05.07</td>
              <td className="text-right text-red-600">2.50 %</td>
            </tr>
            <tr>
              <td className="py-2">플로솝</td>
              <td className="text-right">20,150</td>
              <td className="text-right">2025.04.16</td>
              <td className="text-right text-red-600">3.63 %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
} 