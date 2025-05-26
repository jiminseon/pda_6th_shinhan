import { Button } from "@/components/ui/button"
import { Search, Menu, User } from "lucide-react"

export function Header() {
  return (
    <>
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
    </>
  )
}
