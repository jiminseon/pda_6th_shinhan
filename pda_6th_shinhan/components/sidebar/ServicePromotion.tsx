import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export default function ServicePromotion() {
  return (
    <Card className="bg-gray-700 text-white">
      <CardContent className="p-6">
        <h3 className="font-bold mb-2">라이브 자산관리</h3>
        <h3 className="font-bold mb-4">플랫폼 신한 SOL증권</h3>
        <p className="text-sm mb-4">누구나 쉽게 자산관리</p>
        <p className="text-sm mb-4">제대로 투자하는 신한 SOL증권</p>
        <Button variant="secondary" size="sm">
          자세히보기
        </Button>
      </CardContent>
    </Card>
  );
} 