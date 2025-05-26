import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Users } from "lucide-react"
import Image from "next/image"

export function EventLinks() {
  return (
    <div className="space-y-6">
      {/* Main Promotional Banner */}
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

      {/* Service Promotion */}
      <Card className="bg-gray-700 text-white">
        <CardContent className="p-6">
          <h3 className="font-bold mb-2">라이브 자산관리</h3>
          <h3 className="font-bold mb-4">플랫폼 신한 SOL증권</h3>
          <p className="text-sm mb-4">누구나 쉽게 자산관리</p>
          <p className="text-sm mb-4">제대로 투자하는 신한 SOL증권</p>
          <Button variant="secondary" size="sm">
            자세히보기
          </Button>
          <div className="mt-4 flex items-center justify-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Service */}
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
    </div>
  )
}
