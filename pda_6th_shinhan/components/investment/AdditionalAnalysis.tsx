import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export default function AdditionalAnalysis() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Badge variant="outline" className="mb-2">
              펀드분석서
            </Badge>
            <h3 className="font-semibold mb-2">[펀드분석서] 신한 Earnings Guide: 무역흑자 완화 속</h3>
          </div>
          <div>
            <Badge variant="outline" className="mb-2">
              Earnings
            </Badge>
            <h3 className="font-semibold mb-2">펀드이슈: (강성희의) Earnings Revision) 경기민감주</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 