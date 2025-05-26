export default function BottomSection() {
  return (
    <div className="w-full mt-8 space-y-8">
      {/* 거래량 상위 */}
      <div>
        <div className="font-semibold text-2xl mb-6 flex items-center">거래량 상위 <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b border-t-black">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-center ">종목명</th>
              <th className="py-2 text-center">현재가</th>
              <th className="py-2 text-center">대비</th>
              <th className="py-2 text-center">등락률</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="pt-3.5 pb-2.5 px-7">KODEX 200선물인버스2X</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">2,030</td>
              <td className="text-right text-blue-600 pt-3.5 pb-2.5 px-7">- 50</td>
              <td className="text-right text-blue-600 pt-3.5 pb-2.5 px-7">-2.40 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">메디톡스</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">262</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 46</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">21.30 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">동양철관</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">1,430</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 84</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">6.24 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">우리기술</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">2,400</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 40</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">1.69 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">케이씨티</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">3,650</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 235</td>
              <td className="text-right text-red-600  pt-3.5 pb-2.5 px-7">6.88 %</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 주가상승률 상위 */}
      <div>
        <div className="font-semibold text-2xl mb-6 flex items-center">주가상승률 상위 <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b border-t-black" >
          <thead>
            <tr className="border-b">
              <th className="py-2 text-center">종목명</th>
              <th className="py-2 text-center">현재가</th>
              <th className="py-2 text-center">대비</th>
              <th className="py-2 text-center">등락률</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">브이원텍</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">5,130</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 1,180</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">29.87 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">그린플러스</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">3,720</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 855</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">29.84 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">라닉스</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">21,150</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 4,850</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">29.75 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">신성약품</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">19,980</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 4,480</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">28.90 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">파이아이</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">8,570</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 1,860</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">27.72 %</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 외국인 연속매수(순매수) */}
      <div>
        <div className="font-semibold text-2xl mb-6 flex items-center">외국인 연속매수(순매수) <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b border-t-black">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-center">종목명</th>
              <th className="py-2 text-center">현재가</th>
              <th className="py-2 text-center">대비</th>
              <th className="py-2 text-center">연속일</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">한국전력</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">31,450</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 750</td>
              <td className="text-center pt-3.5 pb-2.5 px-7">29</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">LG유플러스</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">12,740</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 100</td>
              <td className="text-center pt-3.5 pb-2.5 px-7">15</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">현대위아</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">40,500</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">▲ 250</td>
              <td className="text-center pt-3.5 pb-2.5 px-7">14</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">핸드소니션</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">12,890</td>
              <td className="text-right text-blue-600 pt-3.5 pb-2.5 px-7">- 80</td>
              <td className="text-center pt-3.5 pb-2.5 px-7">14</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">세아특수강</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">13,510</td>
              <td className="text-right text-blue-600 pt-3.5 pb-2.5 px-7">- 10</td>
              <td className="text-center pt-3.5 pb-2.5 px-7">14</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 리서치 추천 포트폴리오 */}
      <div>
        <div className="font-semibold text-2xl mb-6 flex items-center">리서치 추천 포트폴리오 <span className="ml-1">+</span></div>
        <table className="w-full text-sm border-t border-b border-t-black">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-center">종목명</th>
              <th className="py-2 text-center">현재가</th>
              <th className="py-2 text-center">편입일</th>
              <th className="py-2 text-center">수익률</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">소재산업</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">6,710</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">2025.05.14</td>
              <td className="text-right text-blue-600 pt-3.5 pb-2.5 px-7">-6.28 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">노스닉스</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">3,520</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">2025.05.09</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">12.46 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">애니패스</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">3,530</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">2025.05.07</td>
              <td className="text-right text-blue-600 pt-3.5 pb-2.5 px-7">-8.07 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">SOOP</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">86,200</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">2025.05.07</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">2.50 %</td>
            </tr>
            <tr className="border-b">
              <td className=" pt-3.5 pb-2.5 px-7">플로솝</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">20,150</td>
              <td className="text-right pt-3.5 pb-2.5 px-7">2025.04.16</td>
              <td className="text-right text-red-600 pt-3.5 pb-2.5 px-7">3.63 %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
} 