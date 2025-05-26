import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import Image from 'next/image';

export default function WebTradingSystem() {
  return (
    <Card className="bg-gradient-to-r from-gray-800 to-gray-600 text-white overflow-hidden">
      <CardContent className="p-6 relative">
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">새로운</h3>
          <h3 className="text-lg font-bold mb-2">웹트레이딩시스템</h3>
          <p className="text-sm opacity-90 mb-4">더욱 Edge 한 (0)세상</p>
          <div className="flex space-x-4">
            <Button variant="secondary" size="sm" className="bg-white text-gray-800">
              WTS 신청
            </Button>
            <Button variant="outline" size="sm" className="border-white text-white">
              WTS 소개
            </Button>
          </div>
          <p className="text-xs mt-4 opacity-75">신한 SOL증권 소개 (신한 SOL/HTS) 소개</p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Business person"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
} 