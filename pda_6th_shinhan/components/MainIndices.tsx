'use client';
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export default function MainIndices() {
  return (
    <div className="bg-opacity-90 rounded-xl">
      <div className="flex-row items-end justify-between mb-2">
        <div className="flex flex-row gap-8">
          <div>
            <div className="text-black-500 text-s mb-2">KOSPI</div>
            <div className="text-5xl pr-2font-bold text-[#e6002d]">2,625.15</div>
            <div className="text-xs text-[#e6002d]">▲ 33.06 (1.28%)</div>
          </div>
          <div>
            <div className="text-black-500 text-s mb-2">KOSDAQ</div>
            <div className="text-xl font-bold text-[#e6002d]">725.99</div>
            <div className="text-xs text-[#e6002d]">▲ 10.01 (1.40%)</div>
          </div>
          <div>
            <div className="text-black-500 text-s mb-2">DOW</div>
            <div className="text-xl font-bold text-[#0050a0]">41,603.07</div>
            <div className="text-xs text-[#0050a0]">▼ 256.02 (-0.61%)</div>
          </div>
          <div>
            <div className="text-black-500 text-s mb-2">NASDAQ</div>
            <div className="text-xl font-bold text-[#0050a0]">18,737.21</div>
            <div className="text-xs text-[#0050a0]">▼ 188.53 (-1.00%)</div>
          </div>
        </div>
        {/* 표로 보기 버튼 */}
        <div className="flex justify-end">
          <button
            className="border border-gray-300 rounded px-3 py-1 text-xs hover:border-gray-500 transition-all"
            onClick={() => openTablePopup()}
          >
            표로 보기 &gt;
          </button>
        </div>
      </div>
      {/* 차트 영역 - 50개 JSON 데이터로 동적 렌더링 */}
      <div className="">
        <ChartWithDynamicData />
      </div>
      {/* 지수 테이블 - 3행 2열, 각 셀에 지수명+값 한 줄, 행 사이 점선 */}


      <div className="w-full mt-2">
        <table className="w-full table-fixed text-sm border-separate" style={{ borderSpacing: 0 }}>
          <tbody>
            {/* 1행 */}
            <tr style={{ borderBottom: '1px solid #dedee0' }}>
              <td className="w-1/2 pr-4 py-2">
                <div className="flex justify-between items-center">
                  <span>KOSPI200</span>
                  <span className="text-red-600 text-right">
                    352.11 <span className="align-middle">▲</span> 6.83 1.98 %
                  </span>
                </div>
              </td>
              <td className="w-1/2 pl-4 py-2">
                <div className="flex justify-between items-center">
                  <span>니케이225</span>
                  <span className="text-red-600 text-right">
                    37,531.53 <span className="align-middle">▲</span> 371.06 1.00 %
                  </span>
                </div>
              </td>
            </tr>

            {/* 2행 */}
            <tr>
              <td className="w-1/2 pr-4 py-2" style={{ borderTop: '1px dotted #000' }}>
                <div className="flex justify-between items-center">
                  <span>선물(최근월물)</span>
                  <span>%</span>
                </div>
              </td>
              <td className="w-1/2 pl-4 py-2" style={{ borderTop: '1px dotted #000' }}>
                <div className="flex justify-between items-center">
                  <span>항셍지수</span>
                  <span className="text-blue-600 text-right">
                    23,282.33 <span className="align-middle">▼</span> 318.93 -1.35 %
                  </span>
                </div>
              </td>
            </tr>

            {/* 3행 */}
            <tr>
              <td
                className="w-1/2 pr-4 py-2 border-b"
                style={{
                  borderTop: '1px dotted #000',
                  borderBottom: '1px solid #dedee0',
                }}
              >
                <div className="flex justify-between items-center">
                  <span>원/달러</span>
                  <span className="text-red-600 text-right">
                    1,370.50 <span className="align-middle">▲</span> 4.00 0.29 %
                  </span>
                </div>
              </td>
              <td
                className="w-1/2 pl-4 py-2 border-b"
                style={{
                  borderTop: '1px dotted #000',
                  borderBottom: '1px solid #dedee0',
                }}
              >
                <div className="flex justify-between items-center">
                  <span>상해종합</span>
                  <span className="text-blue-600 text-right">
                    3,346.84 <span className="align-middle">▼</span> 1.53 -0.05 %
                  </span>
                </div>
              </td>
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
    const start = new Date('2025-02-26');
    const arr = Array.from({length: 50}, (_, i) => {
      const d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
      const date = d.toISOString().slice(0,10).replace(/-/g, '.');
      const base = 2500 + Math.round(200 * Math.sin(i / 7) + 80 * Math.cos(i / 3) + Math.random() * 40);

      // 소프트 클램프 함수
      function softLimit(value: number, min: number, max: number) {
        if (value < min) {
          return min + Math.tanh((value - min) / 100) * 100;
        }
        if (value > max) {
          return max + Math.tanh((value - max) / 100) * 100;
        }
        return value;
      }
      
      const value = Math.round(softLimit(base, 2200, 2600));
      return { date, value };
    });
    setTimeout(() => setData(arr), 500);
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
            axisLabel: { show: true, fontSize: 12, fontWeight: 500, color: '#222', margin: 16, align: 'center' },
            axisLine: { show: true, lineStyle: { color: '#3b82f6', width: 2 } },
            axisTick: { show: true, length: 6, lineStyle: { color: '#3b82f6', width: 2 } },
            splitLine: { show: true, lineStyle: { color: '#d1d5db', width: 1, type: 'solid' } }
          },
          yAxis: {
            type: 'value',
            min: (() => {
              const minValue = Math.floor(Math.min(...yData) / 100) * 100;
              return minValue <= 2100 ? 2200 : minValue;
            })(),
            // min: Math.floor(Math.min(...yData) / 100) * 100,
            max: 2700,
            splitNumber: 5,
            axisLabel: { show: true, fontSize: 12, fontWeight: 500, color: '#222', margin: 16, align: 'right' },
            axisLine: { show: true, lineStyle: { color: '#3b82f6', width: 2 } },
            axisTick: { show: true, length: 6, lineStyle: { color: '#3b82f6', width: 2 } },
            splitLine: { show: true, lineStyle: { color: '#d1d5db', width: 1, type: 'solid' } }
          },
          series: [{
            data: yData,
            type: 'line',
            showSymbol: false,
            smooth: false,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#3b82f6',
              borderColor: '#fff',
              borderWidth: 2
            },
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
          emphasis: {
            focus: 'series',
            symbol: 'circle',        // ✅ hover 시에만 동그라미 표시
            symbolSize: 1,
            itemStyle: {
              borderWidth: 2,
              borderColor: '#fff',
              color: '#3b82f6'
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
        
        onChartReady={(chart) => {
          // canvas DOM을 직접 찾는다
          const canvas = chart.getZr().dom.querySelector('canvas[data-zr-dom-id]');
          if (canvas) {
            canvas.style.left = '-40px';
            canvas.style.top = '10px'; // ✅ 직접 수정!
            canvas.style.height = '184px';
          }
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