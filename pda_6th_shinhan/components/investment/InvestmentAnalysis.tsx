import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Lightbulb } from 'lucide-react';

export default function InvestmentAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          오늘의 투자전략
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Badge variant="outline" className="mb-2">
            투자
          </Badge>
          <h3 className="font-semibold mb-2">신한 Econ Check-up: 경고등 넘어선 재정적자</h3>
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            투자전략
          </Badge>
          <h3 className="font-semibold mb-2">마켓아이디어(5월 26일, 오전)</h3>
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            투자전략
          </Badge>
          <h3 className="font-semibold mb-2">차트 브리핑 - Topdown / Bottom up</h3>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <Badge variant="outline" className="mb-2">
            해외투자전략
          </Badge>
          <h3 className="font-semibold text-blue-600">채권전략: 5월 금통위 Preview: 과속 방지</h3>
          <p className="text-sm text-gray-600 mt-2">
            5월 기준금리 25bp 인하 전망, 물가 호조세에도 성장세 둔화 우려 지속
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 