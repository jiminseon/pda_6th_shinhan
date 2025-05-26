import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { BarChart3 } from 'lucide-react';

export default function GlobalInvestment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-500" />
          오늘의 투자전략
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Badge variant="outline" className="mb-2">
            경제
          </Badge>
          <h3 className="font-semibold mb-2">신한 Econ Check-up; 경고음 낸 미국 재정에도 경제지표 양호</h3>
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            주식시황
          </Badge>
          <h3 className="font-semibold mb-2">마켓레이더(5월 26일, 오전)</h3>
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            마켓이슈
          </Badge>
          <h3 className="font-semibold mb-2">차트 릴레이 - Top down / Bottom up</h3>
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            채권/신용분석
          </Badge>
          <h3 className="font-semibold mb-2">채권전략; 5월 금통위 Preview: 과속 방지 카메라</h3>
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            기술적분석/파생시황
          </Badge>
          <h3 className="font-semibold mb-2">[퀀트분석] 신한 Earnings Guide; 무역분쟁 완화 속 예상보다 견조한 실적</h3>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <Badge variant="outline" className="mb-2">
            계량분석
          </Badge>
          <h3 className="font-semibold text-blue-600">퀀트이슈; (김상호의 Earnings Revision) 경기민감주 중심의 조정</h3>
          <div className="text-sm text-gray-600 mt-2 space-y-2">
            <p>▶ 국내 기업이익 변화</p>
            <p>- 국내 기업의 2020년 순이익 컨센서스(202개)는 전주대비 -1.5%로 하향조정</p>
            <p>- 4Q19, 1Q20 순이익 컨센서스는 전주대비 각각 +0.0%, -2.4%로 상향, 하향조정</p>
            <p>▶ 업종별 이익 변화</p>
            <p>- 업종별 이익 변화율 상위 업종은 소프트웨어(+4.3%), 보험(+0.7%), 건설(+0.2%)</p>
            <p>- NAVER는 코로나19로 인한 광고 부문 일부 타격이 불가피하나 생필품 중심의 이커머스 전반 수요 확대와 2분기 총선 효과 전망 등이 긍정적으로 반영</p>
            <p>▶ 업종별 이익 개선 속도</p>
            <p>- 시장의 이익개선속도는 일평균 -805억원 수준으로 과거 1년 밴드 내 43.0%에 위치</p>
            <p>- 이익개선속도로 본 긍정적인 업종은 미디어, 필수소비재, 통신서비스</p>
            <p>▶ 글로벌 이익 변화</p>
            <p>- 세계 12개월 선행 EPS는 전주대비 -3.6%로 하향조정 (선진: -3.6%, 신흥: -3.5%)</p>
            <p>- 선진시장 내에서는 영국, 이탈리아, 스페인 순으로 이익 전망치 하향조정</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 