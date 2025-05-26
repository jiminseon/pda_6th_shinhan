'use client';
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export default function MainIndices() {
  return (
    <div className="bg-opacity-90 rounded-xl">
      <div className="flex-row items-end justify-between mb-4">
        <div className="flex flex-row gap-8">
          <div>
            <div className="text-gray-500 text-xs">KOSPI</div>
            <div className="text-5xl pr-2font-bold text-[#e6002d]">2,625.15</div>
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
        {/* 표로 보기 버튼 */}
        <div className="flex justify-end">
          <button
            className="border border-gray-300 rounded px-3 py-1 text-xs"
            onClick={() => openTablePopup()}
          >
            표로 보기
          </button>
        </div>
      </div>
      {/* 차트 영역 - 50개 JSON 데이터로 동적 렌더링 */}
      <ChartWithDynamicData />
      {/* 지수 테이블 - 3행 2열, 각 셀에 지수명+값 한 줄, 행 사이 점선 */}
      <div className="w-full mt-6">
        <table className="w-full text-base border-separate" style={{ borderCollapse: 'separate', borderSpacing: '0px 0', borderBottom: '1px solid #dedee0'}}>
          <tbody>
            {/* 1행 */}
            <tr>
              <td className="pr-8" style={{padding: '10px 0 7px'}}>KOSPI200 <span className="text-red-600 ml-2">352.11 <span className="align-middle">▲</span> 6.83 1.98 %</span></td>
              <td className="pl-8" style={{padding: '10px 0 7px'}}>니케이225 <span className="text-red-600 ml-2">37,531.53 <span className="align-middle">▲</span> 371.06 1.00 %</span></td>
            </tr>
            {/* 2행 */}
            <tr>
              <td className="pr-8" style={{padding: '10px 0 7px', borderTop: '1px dotted #000'}}>선물(최근월물) <span className="ml-2">%</span></td>

              <td className="pl-8" style={{padding: '10px 0 7px', borderTop: '1px dotted #000'}}>항셍지수 <span className="text-blue-600 ml-2">23,259.06 <span className="align-middle">▼</span> 342.20 -1.45 %</span></td>
            </tr>
            {/* 3행 */}
            <tr>
              <td className="pr-8" style={{padding: '10px 0 7px', borderTop: '1px dotted #000'}}>원/달러 <span className="text-blue-600 ml-2">1,366.50 <span className="align-middle">▼</span> 16.20 -1.17 %</span></td>
              <td className="pl-8" style={{padding: '10px 0 7px', borderTop: '1px dotted #000'}}>상해종합 <span className="text-blue-600 ml-2">3,346.84 <span className="align-middle">▼</span> 1.53 -0.05 %</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

// 차트 데이터 50개를 받아와서 그리는 컴포넌트
function ChartWithDynamicData() {
  const [data, setData] = useState<{date: string, value: number}[]>([]);
  useEffect(() => {
    // 실제 fetch 대신 mock 데이터 (50개)
    const start = new Date('2025-02-26');
    const arr = Array.from({length: 50}, (_, i) => {
      const d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
      const date = d.toISOString().slice(0,10).replace(/-/g, '.');
      // 임의의 등락 데이터
      const value = 2400 + Math.round(200 * Math.sin(i/7) + 80 * Math.cos(i/3) + Math.random()*40);
      return { date, value };
    });
    setTimeout(() => setData(arr), 500); // 0.5초 후 데이터 세팅 (fetch 흉내)
    // 데이터가 준비되면 window에 저장 (팝업에서 사용)
    (window as any).dataForTable = arr;
  }, []);

  if (data.length === 0) return <div className="w-full h-[165px] flex items-center justify-center">Loading...</div>;

  const xData = data.map(d => d.date);
  const yData = data.map(d => d.value);
  return (
    <div style={{
      width: '100%', height: '165px', maxWidth: '100%',
      borderRadius: '16px', overflow: 'hidden', background: 'transparent'
    }}>
      <ReactECharts
        option={{
          backgroundColor: 'rgba(0,0,0,0)',
          grid: { left: 40, right: 20, top: 10, bottom: 30, containLabel: true },
          xAxis: {
            type: 'category',
            data: xData,
            axisLabel: { show: true, fontSize: 14, fontWeight: 500, color: '#222', margin: 8, align: 'center' },
            axisLine: { show: true, lineStyle: { color: '#3b82f6', width: 2 } },
            axisTick: { show: true, length: 6, lineStyle: { color: '#3b82f6', width: 2 } },
            splitLine: { show: true, lineStyle: { color: '#d1d5db', width: 1, type: 'solid' } }
          },
          yAxis: {
            type: 'value',
            min: Math.floor(Math.min(...yData) / 100) * 100,
            max: Math.ceil(Math.max(...yData) / 100) * 100,
            splitNumber: 4,
            axisLabel: { show: true, fontSize: 14, fontWeight: 500, color: '#222', margin: 8, align: 'right' },
            axisLine: { show: true, lineStyle: { color: '#3b82f6', width: 2 } },
            axisTick: { show: true, length: 6, lineStyle: { color: '#3b82f6', width: 2 } },
            splitLine: { show: true, lineStyle: { color: '#d1d5db', width: 1, type: 'solid' } }
          },
          series: [{
            data: yData,
            type: 'line',
            smooth: false,
            symbol: 'none',
            lineStyle: { color: '#3b82f6', width: 2 },
            areaStyle: { color: 'rgba(59,130,246,0.7)' }
          }],
          tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: { type: 'line' },
            backgroundColor: '#fff',
            borderColor: '#eee',
            borderWidth: 1,
            textStyle: { color: '#222', fontSize: 13 },
            padding: [8, 12],
            extraCssText: 'box-shadow:0 2px 8px rgba(0,0,0,0.08);',
            formatter: function(params: any) {
              const d = params[0];
              return `<div style=\"font-weight:700;font-size:15px;\">${d.axisValue}</div>` +
                     `<div style=\"font-weight:400;font-size:14px;\">${d.data.toLocaleString()}</div>`;
            }
          },
          animation: false,
          graphic: [
            {
              type: 'rect',
              left: '40', right: '20', top: '10', bottom: '30',
              shape: { x: 0, y: 0, width: 'auto', height: 'auto', r: [12, 12, 0, 0] },
              style: {
                stroke: '#d1d5db',
                lineWidth: 2,
                fill: 'transparent'
              },
              z: 10
            }
          ]
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

// 팝업창에 표 띄우기 함수 (차트 데이터와 연동)
function openTablePopup() {
  // window.dataForTable은 ChartWithDynamicData에서 세팅
  const data = (window as any).dataForTable as {date: string, value: number}[];
  if (!data) return;
  const tableRows = data.slice(-20).reverse().map(
    d => `<tr><td>${d.date}</td><td style='text-align:right'>${d.value.toLocaleString()}</td></tr>`
  ).join('');
  const html = `
    <html>
      <head>
        <title>KOSPI 지수정보</title>
        <style>
          body { font-family: 'Pretendard', 'sans-serif'; margin: 0; padding: 32px; background: #fff; }
          h2 { text-align: center; font-size: 2rem; margin-bottom: 32px; }
          table { width: 100%; border-collapse: collapse; font-size: 1.1rem; }
          th, td { padding: 16px 0; border-bottom: 1px solid #eee; }
          th { background: #f7f7f7; border-bottom: 2px solid #223a7a; font-weight: 600; }
          tr:last-child td { border-bottom: none; }
        </style>
      </head>
      <body>
        <h2>KOSPI 지수정보</h2>
        <table>
          <thead>
            <tr><th>일자</th><th>지수</th></tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </body>
    </html>
  `;
  const win = window.open('', '_blank', 'width=480,height=700');
  if (win) {
    win.document.write(html);
    win.document.close();
  }
} 