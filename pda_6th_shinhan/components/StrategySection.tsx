'use client';
import React from 'react';
import { Badge } from './ui/badge';
import Image from 'next/image';

export default function StrategySection() {
  return (
    <div className="relative">
      <div
        className="absolute z-[1]"
        style={{
          content: "''",
          top: '-71px',
          left: '240px',
          width: '190px',
          height: '219px',
          background: 'url(https://www.shinhansec.com/siw/common/images/trading/bg_main_strat01.png) 0 0 no-repeat'
        }}
      />

      <div className="relative w-full p-10 z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="stratData today h-[400px] overflow-hidden">
            <h2 className="text-[#000000] font-bold text-[28px] mb-4 text-lg">오늘의 투자전략</h2>
            <ul className="stratLst flex flex-col gap-2">
              <li className="group relative h-[54px] transition-all hover:h-[240px] hover:py-[15px] hover:my-[13px] focus:h-[120px] cursor-pointer mb-2" tabIndex={0}>
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat',
                       width: '17px',
                       height: '210px'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -23px 0 no-repeat',
                       width: '17px',
                       height: '210px'
                     }} />
                <div className="absolute px-6 py-3">
                  <Badge variant="outline" className="mb-2">계량분석</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">퀀트이슈; (김상호의Earnings Revision) 경기민감주</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto group-focus:h-auto overflow-hidden transition-all duration-300">
                    국내 기업이익 변화 - 국내 기업의 2020년 순이익 컨센서스 202개)는 전주대비 - 1.5%로 하향조정 - 4Q19, 1Q20
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] focus:h-[120px] cursor-pointer mb-2" tabIndex={0}>
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="absolute px-6 py-3">
                  <Badge variant="outline" className="mb-2">기술적분석/파생시황</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">[퀀트분석] 신한 Earnings Guide;</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto group-focus:h-auto overflow-hidden transition-all duration-300">
                    관세전쟁 불확실성 완화와 업종별 실적 차별화 KOSPI 2025년 1분기 실적 점검과 영업이익 컨센서스 추이 반도체 실적하단
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] cursor-pointer">
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="px-6 py-3">
                  <Badge variant="outline" className="mb-2">경제</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">신한 Econ Check-up; 경고음 낸 미국 재정에도</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    Review: 경고음 낸 미국 재정에도 경제지표 양호 Preview: 글로벌 경기 완만한 둔화 속 한국 금리 인하 Review: 경고음 낸
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] cursor-pointer">
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="px-6 py-3">
                  <Badge variant="outline" className="mb-2">주식시황</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">[글로벌 주식시장] 6월 미국 주식시장 전망; V자 반등</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    여전한 불확실성에도 불구 V자 반등이 전개될 수 있었던 이유 V자 반등 이후 일반적인 전개 과정: 1~2개월 쉬고 다시 출발
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] cursor-pointer">
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="px-6 py-3">
                  <Badge variant="outline" className="mb-2">마켓이슈</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">차트 릴레이 - Top down / Bottom up</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    차트 릴레이 - Top down / Bottom up_8월 30일 자
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] cursor-pointer">
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="px-6 py-3">
                  <Badge variant="outline" className="mb-2">채권/신용분석</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">채권전략; 5월 금통위 Preview: 과속 방지</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    5월 기준금리 25bp 인하 유력, 향후 통화정책 방향성 힌트에 주목 1) 잠재성장률 2) 외환 변동성 3) 2차 추경 속 신중한
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="stratData global h-[400px] overflow-hidden">
            <h2 className="text-[#000000] font-bold text-[28px] mb-4 text-lg">글로벌 투자전략</h2>
            <ul className="stratLst flex flex-col-reverse gap-2">
              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] focus:h-[120px] cursor-pointer mb-2" tabIndex={0}>
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="absolute px-6 py-3">
                  <Badge variant="outline" className="mb-2">중국주식/경제</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">Global Insight: 중국 경기 바닥 확인의 증거</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto group-focus:h-auto overflow-hidden transition-all duration-300">
                    중국 경기 바닥 확인의 증거 - 무역분쟁 1차 합의 이후 그날 눌려있던 중국 경제 반등 가능성 부상 - 주요 경제 지표, 소프트
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] focus:h-[120px] cursor-pointer mb-2" tabIndex={0}>
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="absolute px-6 py-3">
                  <Badge variant="outline" className="mb-2">해외주식</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">웹툰엔터 (WBTN.US); 길게 보아야 예쁘다</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto group-focus:h-auto overflow-hidden transition-all duration-300">
                    신한생각 좀 더 지켜보자 1Q25 Review:Q 감소 + P 상승 = 무난한 매출액 성장 하반기에 보여줄 수 있지? 신한생각 좀 더
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] focus:h-[120px] cursor-pointer mb-2" tabIndex={0}>
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="absolute px-6 py-3">
                  <Badge variant="outline" className="mb-2">해외채권</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">[2H25 국내 크레딧시장 전망] 역사의 반복</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto group-focus:h-auto overflow-hidden transition-all duration-300">
                    성장과 수출 경로 부정적, 신용 스프레드는 제한적인 확대 전망 기업들은 미국 내 직접 투자 확대로 대응 성장과 수출 경로
                  </p>
                </div>
              </li>

              <li className="group relative h-[42px] transition-all duration-300 hover:h-[120px] focus:h-[120px] cursor-pointer mb-2" tabIndex={0}>
                <div className="absolute left-0 top-0 w-[17px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) 0 0 no-repeat'
                     }} />
                <div className="absolute right-0 top-0 w-[20px] h-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                     style={{
                       background: '#545fa6 url(https://www.shinhansec.com/siw/common/images/trading/bg_main_bracket.gif) -17px 0 no-repeat',
                       backgroundSize: '37px 210px'
                     }} />
                <div className="absolute px-6 py-3">
                  <Badge variant="outline" className="mb-2">글로벌이슈</Badge>
                  <h3 className="font-semibold text-[14px] leading-[1.6] text-[#333]">세계를 여는 사람들 (3월 26일)</h3>
                  <p className="text-sm text-gray-600 h-0 group-hover:h-auto group-focus:h-auto overflow-hidden transition-all duration-300">
                    주요 뉴스 - 미 정부와 의회는 2조달러 규모 부양책에 합의하며 오늘 상원에서 합의안 통과 가능성 거론 - 지난주
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="relative mb-[0px] text-right">
            <Image
              src="https://www.shinhansec.com/siw/common/images/trading/bg_main_strat02.gif"
              alt="Strategy Bottom"
              width={150}
              height={120}
              className="object-contain inline-block"
            />
          </div>

          <div className="border-t-[3px] border-black mb-8"></div>

          <div className="flex bg-gray-40 h-[180px]">
            <div className="relative w-1/2 p-6 text-white overflow-hidden" style={{
              backgroundImage: 'url(https://www.shinhansec.com/siw/common/images/trading/bg_main_event02.png)',
              backgroundSize: '98%',
              backgroundPosition: 'left bottom',
              backgroundRepeat: 'no-repeat'
            }}>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-1">모바일 자산관리</h2>
                <p className="text-lg mb-2">플랫폼 신한 SOL증권</p>
                <p className="text-sm opacity-90 mb-3">
                  누구나 쉽게 시작하고<br />
                  재미있게 투자하는 신한 SOL증권
                </p>
                <p className="text-xs opacity-75">자세히보기 →</p>
              </div>
            </div>

            <div className="bg-white pl-6 text-left relative w-1/4">
              <h3 className="text-xl font-bold mb-2">해외주식</h3>
              <div className="mb-2">
                <img
                  src="first_menu.png"
                  alt="해외주식"
                  className="w-15 h-15 mx-left object-contain"
                />
              </div>
              <p className="text-sm text-gray-500">25개국 24시간<br />해외주식투자 서비스</p>
            </div>

            <div className="bg-white pl-2 text-left relative w-1/4">
              <h3 className="text-xl font-bold mb-2">해외선물</h3>
              <div className="mb-2">
                <img
                  src="second_menu.png"
                  alt="해외선물"
                  className="w-15 h-15 mx-left object-contain"
                />
              </div>
              <p className="text-sm text-gray-500">해외선물<br />증권 노하우를 경험해보세요!</p>
            </div>
          </div>

          <div className="w-[47%] border-t-[3px] border-black ml-auto"></div>
        </div>
      </div>
    </div>
  );
} 