import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TopTradingVolume() {
  return (
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
  )
}
