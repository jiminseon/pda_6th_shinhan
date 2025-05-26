export default function MainIndices() {
  return (
    <div className="bg-opacity-90 rounded-xl shadow p-8 mb-8">
      <div className="flex flex-row items-end justify-between mb-4">
        <div className="flex flex-row gap-8">
          <div>
            <div className="text-gray-500 text-xs">KOSPI</div>
            <div className="text-3xl font-bold text-[#e6002d]">2,625.15</div>
            <div className="text-xs text-[#e6002d]">▲ 33.06 (1.28%)</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs">KOSDAQ</div>
            <div className="text-xl font-bold text-[#e6002d]">725.99</div>
            <div className="text-xs text-[#e6002d]">▲ 10.01 (1.40%)</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs">DOW</div>
            <div className="text-xl font-bold text-[#0050a0]">41,603.07</div>
            <div className="text-xs text-[#0050a0]">▼ 256.02 (-0.61%)</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs">NASDAQ</div>
            <div className="text-xl font-bold text-[#0050a0]">18,737.21</div>
            <div className="text-xs text-[#0050a0]">▼ 188.53 (-1.00%)</div>
          </div>
        </div>
        <button className="border border-gray-300 rounded px-3 py-1 text-xs">표로 보기</button>
      </div>
      {/* 차트 영역 */}
      <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded mb-6 flex items-end">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <path d="M 0 150 Q 50 140 100 120 T 200 100 T 300 80 T 400 70" stroke="#3b82f6" strokeWidth="2" fill="none" />
          <path d="M 0 150 Q 50 140 100 120 T 200 100 T 300 80 T 400 70 L 400 200 L 0 200 Z" fill="url(#gradient)" opacity="0.6" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* 지수 테이블 */}
      <div className="grid grid-cols-4 gap-4 text-xs text-gray-700">
        <div>
          <div>KOSPI200</div>
          <div className="text-[#e6002d]">349.32 ▲ 4.04 1.17%</div>
        </div>
        <div>
          <div>니케이225</div>
          <div className="text-[#e6002d]">37,473.61 ▲ 313.14 0.84%</div>
        </div>
        <div>
          <div>항셍지수</div>
          <div className="text-[#0050a0]">23,360.43 ▼ 241.23 -1.02%</div>
        </div>
        <div>
          <div>상해종합</div>
          <div className="text-[#0050a0]">3,342.04 ▼ 6.33 -0.19%</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 text-xs text-gray-700 mt-2">
        <div>
          <div>선물(최근월물)</div>
          <div className="text-[#0050a0]">%</div>
        </div>
        <div>
          <div>원/달러</div>
          <div className="text-[#0050a0]">1,366.50 ▼ 16.20 -1.17%</div>
        </div>
      </div>
    </div>
  )
} 