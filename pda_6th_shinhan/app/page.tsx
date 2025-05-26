import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, BarChart3, Globe, Users, Search, Menu, User } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-6 text-gray-600">
              <span>로그인</span>
              <span>계좌개설</span>
              <span>고객센터</span>
              <span>이벤트</span>
              <span>신한Premier</span>
              <span>모바일앱</span>
              <span>영문</span>
              <span>Tops Club</span>
              <span>신한금융그룹</span>
              <span>사용자도움말</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="text-xl font-bold text-blue-600">신한투자증권</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 h-12 text-sm">
            <span className="text-gray-700">나의 자산현황</span>
            <span className="text-gray-700">자산관리몰</span>
            <span className="text-gray-700">연금자산</span>
            <span className="text-gray-700">투자이슈</span>
            <span className="text-gray-700">투자정보</span>
            <span className="text-gray-700">해외/글로벌/연금</span>
            <span className="text-gray-700">고객센터</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 h-10 text-sm text-gray-600">
            <span>🏠</span>
            <span>투자이슈</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Indices */}
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

            {/* Investment Analysis Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    글로벌 투자전략
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      RESEARCH
                    </Badge>
                    <h3 className="font-semibold mb-2">Global Insight: 중국 경기 비관 확인의 증거</h3>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      해외전략
                    </Badge>
                    <h3 className="font-semibold mb-2">월튼에셋 (WBTN.US): 컴게 보이아 엔젤다</h3>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <Badge variant="outline" className="mb-2">
                      투자전략
                    </Badge>
                    <h3 className="font-semibold text-blue-600">[2H25 국내 크레딧시장 전망] 역시의 반복</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      성장률 측면 경제 우려감, 신용 스프레드는 제한적인 확대 전망
                    </p>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      해외전략
                    </Badge>
                    <h3 className="font-semibold mb-2">세계를 여는 사람들 (3월 26일)</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Analysis */}
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

            {/* Stock Performance Tables */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>거래량 상위 +</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">종목명</th>
                          <th className="text-right py-2">현재가</th>
                          <th className="text-right py-2">대비</th>
                          <th className="text-right py-2">등락률</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">KODEX 200선물인버스2X</td>
                          <td className="text-right">2,035</td>
                          <td className="text-right text-red-600">▲ 45</td>
                          <td className="text-right text-red-600">2.16%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">레이크머스</td>
                          <td className="text-right">262</td>
                          <td className="text-right text-red-600">▲ 46</td>
                          <td className="text-right text-red-600">21.30%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">동양철관</td>
                          <td className="text-right">1,448</td>
                          <td className="text-right text-red-600">▲ 102</td>
                          <td className="text-right text-red-600">7.58%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">우리기술</td>
                          <td className="text-right">2,410</td>
                          <td className="text-right text-red-600">▲ 50</td>
                          <td className="text-right text-red-600">2.12%</td>
                        </tr>
                        <tr>
                          <td className="py-2">케이씨텍</td>
                          <td className="text-right">3,795</td>
                          <td className="text-right text-red-600">▲ 380</td>
                          <td className="text-right text-red-600">11.13%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>주가상승률 상위 +</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">종목명</th>
                          <th className="text-right py-2">현재가</th>
                          <th className="text-right py-2">대비</th>
                          <th className="text-right py-2">등락률</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2">신풍제약</td>
                          <td className="text-right">20,150</td>
                          <td className="text-right text-red-600">▲ 4,650</td>
                          <td className="text-right text-red-600">30.00%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Promotional Banner */}
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
        </div>
      </div>
    </div>
  )
}
