import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { BarChart3 } from "./icons"

export function GlobalInvestmentStrategy() {
  return (
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
            성장률 측면 경제 우려감, 신용 스프레드는 제한적인 확대 전망 기업부채 측면 악화 우려 지속되나 크레딧 스프레드
            확대 폭 제한
          </p>
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            해외전략
          </Badge>
          <h3 className="font-semibold mb-2">세계를 여는 사람들 (3월 26일)</h3>
        </div>
        <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-sm text-gray-600">차트 이미지</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
