import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Globe, Users } from 'lucide-react';

export default function CustomerService() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardContent className="p-4 text-center">
          <Globe className="h-8 w-8 mx-auto mb-2 text-blue-600" />
          <h4 className="font-semibold mb-1">해외주식</h4>
          <p className="text-xs text-gray-600">27개국 24시간</p>
          <p className="text-xs text-gray-600">해외주식투자 서비스</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
          <h4 className="font-semibold mb-1">해외선물</h4>
          <p className="text-xs text-gray-600">해외선물</p>
          <p className="text-xs text-gray-600">종목 노하우를 경험하세요!</p>
        </CardContent>
      </Card>
    </div>
  );
} 