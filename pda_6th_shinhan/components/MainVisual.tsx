import React from "react";
// 주요 지수/차트, WTS, 전략 카드 컴포넌트 임포트 (실제 구현시 교체)
// import MarketIndices from "./market/MarketIndices";
// import WebTradingSystem from "./sidebar/WebTradingSystem";
// import TodayStrategy from "./strategy/TodayStrategy";
// import GlobalStrategy from "./strategy/GlobalStrategy";

export default function MainVisual() {
  return (
    <div
      style={{
        backgroundImage: 'url("https://www.shinhansec.com/siw/common/images/trading/bg_main_visual.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        position: "relative",
        width: "100%",
      }}
      className="flex flex-col"
    >
      <div className="flex flex-row justify-between px-16 pt-12">
        {/* 왼쪽: 주요 지수/차트 */}
        <div className="w-2/3">
          {/* <MarketIndices /> */}
          <div className="bg-white/80 rounded-lg shadow p-6 mb-4">
            <div className="text-2xl font-bold mb-2">KOSPI 2,625.15</div>
            <div className="text-sm text-gray-600 mb-4">+33.06 (1.28%)</div>
            <div className="h-32 bg-gray-200 rounded mb-2 flex items-center justify-center text-gray-400">차트 영역</div>
            <div className="flex gap-4 text-xs text-gray-700">
              <div>KOSDAQ 725.99</div>
              <div>DOW 41,603.07</div>
              <div>NASDAQ 18,737.21</div>
            </div>
          </div>
        </div>
        {/* 오른쪽: WTS 안내 */}
        <div className="w-1/3 flex flex-col items-end">
          {/* <WebTradingSystem /> */}
          <div className="bg-black/70 text-white rounded-lg shadow p-6 w-80">
            <div className="text-lg font-bold mb-2">새로운 웹트레이딩 시스템</div>
            <div className="text-xs mb-4">(크롬, Edge, IE10이상)</div>
            <div className="flex gap-4 mb-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">WTS 신버전</button>
              <button className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded border border-white">WTS 소개</button>
            </div>
            <div className="text-xs text-gray-300">신한 SOL증권 소개 | 신한 SOL(HTS) 소개</div>
          </div>
        </div>
      </div>
      {/* 하단: 투자전략 카드 */}
      <div className="flex flex-row justify-center gap-8 mt-12">
        {/* <TodayStrategy /> */}
        <div className="bg-white rounded-lg shadow p-6 w-96">
          <div className="text-lg font-bold mb-2">오늘의 투자전략</div>
          <div className="text-xs text-blue-600 mb-1">경제</div>
          <div className="font-semibold mb-1">신한 Econ Check-up; 경고음 낸 미국 재정에도</div>
          <div className="text-xs text-gray-500">Review: 경고음 낸 미국 재정에도 경제지표 양호 Preview</div>
        </div>
        {/* <GlobalStrategy /> */}
        <div className="bg-white rounded-lg shadow p-6 w-96">
          <div className="text-lg font-bold mb-2">글로벌 투자전략</div>
          <div className="text-xs text-blue-600 mb-1">중국주식/경제</div>
          <div className="font-semibold mb-1">Global Insight: 중국 경기 바닥 확인의 증거</div>
          <div className="text-xs text-gray-500">중국 경기 바닥 확인의 증거 - 무역협정 1차 합의 이후 그날</div>
        </div>
      </div>
    </div>
  );
} 