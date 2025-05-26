'use client';
import React from 'react';
import { Badge } from './ui/badge';
import Image from 'next/image';

export default function StrategySection() {
  return (
    <>
      <style jsx>{`
        .strategy-section {
          position: relative;
          overflow: visible;
        }

        .strategy-bg-top {
          position: fixed;
          top: -20;
          right: -10;
          width: 150px;
          height: 150px;
          z-index: 0;
          pointer-events: none;
        }

        .strategy-bg-bottom {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 200px;
          height: 200px;
          z-index: 0;
          pointer-events: none;
        }

        .strategy-card {
          position: relative;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          padding: 24px;
          overflow: visible;
          z-index: 1;
        }

        .strategy-content {
          position: relative;
          z-index: 2;
        }

        .strategy-item {
          position: relative;
          padding: 16px 24px;
          margin: 8px -24px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .strategy-item:hover .bracket-left,
        .strategy-item:hover .bracket-right {
          opacity: 1;
          transform: translateX(0);
        }

        .bracket-left,
        .bracket-right {
          position: absolute;
          font-size: 20px;
          color: #0050a0;
          opacity: 0;
          transition: all 0.3s ease;
          top: 0;
          height: 100%;
          display: flex;
          align-items: center;
          font-weight: bold;
        }

        .bracket-left {
          left: 4px;
          transform: translate(-20px, 0);
        }

        .bracket-right {
          right: 4px;
          transform: translate(20px, 0);
        }

        .hover-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          border-radius: 8px;
          margin-top: 8px;
          background-color: rgba(0, 80, 160, 0.03);
        }

        .strategy-item:hover .hover-content {
          max-height: 200px;
          padding: 12px;
        }

        .strategy-item:hover {
          background-color: #f5f5f5;
        }

        .grid-divider {
          position: relative;
        }

        .grid-divider::after {
          content: '';
          position: absolute;
          left: -12px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: #e5e5e5;
        }

        .strategy-section::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -20px;
          height: 2px;
          background: #333;
        }

        .service-section {
          position: relative;
          z-index: 1;
          margin-top: 40px;
          padding-top: 20px;
        }

        .service-card {
          position: relative;
          padding: 24px;
          border-radius: 12px;
          background: white;
          text-align: center;
          transition: transform 0.3s ease;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.1;
          z-index: 1;
        }

        .service-content {
          position: relative;
          z-index: 2;
        }

        .mobile-service::before {
          background-image: url('https://www.shinhansec.com/siw/common/images/trading/bg_main_event02.png');
        }
      `}</style>

      <div className="strategy-section mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="strategy-card">
            <Image
              src="https://www.shinhansec.com/siw/common/images/trading/bg_main_strat01.png"
              alt="Strategy Top"
              width={150}
              height={150}
              className="strategy-bg-top"
              style={{ position: 'absolute', top: 0, right: 0 }}
            />
            <div className="strategy-content">
              <div className="text-[#0050a0] font-bold mb-4 text-lg">오늘의 투자전략</div>
              <div className="space-y-2">
                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">경제</Badge>
                  <h3 className="font-semibold">신한 Econ Check-up; 경고음 낸 미국 재정에도</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">Review: 경고음 낸 미국 재정에도 경제지표 호조 Preview: 글로벌 경기 모멘텀 약화, 금리 인하 임박</p>
                  </div>
                </div>

                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">주식시황</Badge>
                  <h3 className="font-semibold">마켓레이더(5월 26일, 오전)</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">국내 증시 동향 및 글로벌 시장 영향 분석</p>
                  </div>
                </div>

                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">마켓이슈</Badge>
                  <h3 className="font-semibold">차트 릴레이 - Top down / Bottom up</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">주요 시장 지표 분석 및 투자 전략 제시</p>
                  </div>
                </div>

                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">채권/신용분석</Badge>
                  <h3 className="font-semibold">채권전략; 5월 금통위 Preview: 과속 방지 카메라</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">금리 동향 및 채권 시장 전망 분석</p>
                  </div>
                </div>

                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">기술적분석/파생시황</Badge>
                  <h3 className="font-semibold">[퀀트분석] 신한 Earnings Guide; 무역분쟁 완화 속 예상보다 견조한 실적</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">기업 실적 및 기술적 분석 리포트</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="strategy-card grid-divider">
            <Image
              src="https://www.shinhansec.com/siw/common/images/trading/bg_main_strat02.gif"
              alt="Strategy Bottom"
              width={200}
              height={200}
              className="strategy-bg-bottom"
              style={{ position: 'absolute', bottom: 0, right: 0 }}
            />
            <div className="strategy-content">
              <div className="text-[#0050a0] font-bold mb-4 text-lg">글로벌 투자전략</div>
              <div className="space-y-2">
                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">중국주식/경제</Badge>
                  <h3 className="font-semibold">Global Insight: 중국 경기 바닥 확인의 증거</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">중국 경기 회복 신호 및 투자 기회 분석</p>
                  </div>
                </div>

                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">해외주식</Badge>
                  <h3 className="font-semibold">웹툰엔터 (WBTN.US); 길게 보아야 예쁘다</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">글로벌 엔터테인먼트 산업 전망 분석</p>
                  </div>
                </div>

                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">해외채권</Badge>
                  <h3 className="font-semibold">[2H25 국내 크레딧시장 전망] 역사의 반복</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">글로벌 채권 시장 동향 및 투자 전략</p>
                  </div>
                </div>

                <div className="strategy-item">
                  <span className="bracket-left">[</span>
                  <Badge variant="outline" className="mb-2">글로벌이슈</Badge>
                  <h3 className="font-semibold">세계를 여는 사람들 (3월 26일)</h3>
                  <span className="bracket-right">]</span>
                  <div className="hover-content">
                    <p className="text-sm text-gray-600">주요 글로벌 이슈 및 시장 영향 분석</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service-card mobile-service">
          <div className="service-content">
            <h3 className="font-bold text-lg mb-2">모바일 자산관리</h3>
            <p className="text-sm text-gray-600">플랫폼 신한 SOL증권</p>
            <p className="text-xs text-gray-500 mt-2">누구나 쉽게 시작하는 제대로 된 SOL증권</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-content">
            <h3 className="font-bold text-lg mb-2">해외주식</h3>
            <p className="text-sm text-gray-600">25개국 24시간</p>
            <p className="text-xs text-gray-500 mt-2">해외주식투자 서비스</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-content">
            <h3 className="font-bold text-lg mb-2">해외선물</h3>
            <p className="text-sm text-gray-600">해외선물</p>
            <p className="text-xs text-gray-500 mt-2">증개 노하우를 경험해보세요!</p>
          </div>
        </div>
      </div>
    </>
  );
} 