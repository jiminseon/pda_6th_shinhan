import React from 'react';
import { Card, CardContent } from '../../components/ui/card';

export default function MarketIndices() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div>
            <div className="text-sm text-gray-600 mb-1">KOSPI</div>
            <div className="text-2xl font-bold text-red-600">2,623.00</div>
            <div className="text-sm text-red-600">▲ 30.01 (1.15%)</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">KOSDAQ</div>
            <div className="text-lg font-bold">725.71</div>
            <div className="text-sm text-red-600">▲ +7.31 (1.02%)</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">DOW</div>
            <div className="text-lg font-bold">41,603.07</div>
            <div className="text-sm text-red-600">▲ 259.65 (0.63%)</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">NASDAQ</div>
            <div className="text-lg font-bold">18,737.21</div>
            <div className="text-sm text-red-600">▲ 168.56 (0.91%)</div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-4 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path
              d="M 0 150 Q 50 140 100 120 T 200 100 T 300 80 T 400 70"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 0 150 Q 50 140 100 120 T 200 100 T 300 80 T 400 70 L 400 200 L 0 200 Z"
              fill="url(#gradient)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Stock Table */}
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="flex justify-between">
              <span>KOSPI200</span>
              <span className="text-red-600">349.25 ▲ 3.97 1.15%</span>
            </div>
            <div className="flex justify-between">
              <span>나스닥225</span>
              <span className="text-red-600">37,437.67 ▲ 277.40 0.75%</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="flex justify-between">
              <span>선물(미니코스피)</span>
              <span className="text-blue-600">23,367.70 ▼ 233.50 -0.99%</span>
            </div>
            <div className="flex justify-between">
              <span>원/달러</span>
              <span className="text-blue-600">1,366.50 ▼ 16.70 -1.17%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 