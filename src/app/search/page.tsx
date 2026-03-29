"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Star, Search, X } from 'lucide-react'

// 景点数据
const attractions = [
  { id: 1, name: '广州塔（小蛮腰）', description: '广州地标建筑，600米高的观光塔', location: '海珠区', rating: 4.8, price: '¥150 起', image: 'https://images.unsplash.com/photo-1567001909734-0c3e21c0c1cb?w=400&q=80', type: '景点' },
  { id: 2, name: '白云山', description: '南粤名山，登山观景好去处', location: '白云区', rating: 4.6, price: '¥5 起', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', type: '景点' },
  { id: 3, name: '陈家祠', description: '岭南建筑艺术瑰宝', location: '荔湾区', rating: 4.7, price: '¥10', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&q=80', type: '景点' },
  { id: 4, name: '沙面岛', description: '欧陆风情建筑群', location: '荔湾区', rating: 4.6, price: '免费', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', type: '景点' },
  { id: 5, name: '北京路步行街', description: '千年商都核心', location: '越秀区', rating: 4.5, price: '免费', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80', type: '景点' },
  { id: 6, name: '珠江夜游', description: '乘船欣赏珠江夜景', location: '天河区', rating: 4.7, price: '¥80 起', image: 'https://images.unsplash.com/photo-1580477667995-2b94f7c4f1e8?w=400&q=80', type: '景点' },
]

// 美食数据
const foods = [
  { id: 1, name: '广式早茶', description: '虾饺、烧卖、叉烧包', location: '各大酒家', rating: 4.9, price: '人均60-100元', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80', type: '美食' },
  { id: 2, name: '白切鸡', description: '皮爽肉滑，广州名菜', location: '粤菜馆', rating: 4.7, price: '人均40-80元', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80', type: '美食' },
  { id: 3, name: '煲仔饭', description: '香喷喷的砂锅饭', location: '老字号', rating: 4.6, price: '人均35-60元', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=400&q=80', type: '美食' },
  { id: 4, name: '双皮奶', description: '顺德特色，奶香浓郁', location: '甜品店', rating: 4.8, price: '人均15-30元', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80', type: '美食' },
]

// 酒店数据
const hotels = [
  { id: 1, name: '广州四季酒店', description: '珠江新城核心地段', location: '天河区', rating: 4.9, price: '¥1500 起', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', type: '酒店' },
  { id: 2, name: '白天鹅宾馆', description: '临江园林式酒店', location: '荔湾区', rating: 4.8, price: '¥800 起', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', type: '酒店' },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchInput, setSearchInput] = useState(query)
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    if (query) {
      const allData = [...attractions, ...foods, ...hotels]
      const filtered = allData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.trim())}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">🔍 搜索</h1>
          
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="搜索景点、美食、酒店..."
              className="w-full px-6 py-4 rounded-full text-slate-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              搜索
            </button>
          </form>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {query ? (
          <>
            <p className="text-slate-500 mb-6">
              找到 {results.length} 个关于 "{query}" 的结果
            </p>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((item) => (
                  <Link
                    key={`${item.type}-${item.id}`}
                    href={item.type === '景点' ? `/attractions/${item.id}` : item.type === '美食' ? '/food' : '/hotel'}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full bg-white/90 text-sm font-medium">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-slate-500 text-sm mb-2 line-clamp-1">{item.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                        <span className="font-bold text-orange-500">{item.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">未找到相关结果</h3>
                <p className="text-slate-500">试试其他关键词</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">输入关键词搜索</h3>
            <p className="text-slate-500">可以搜索景点、美食、酒店</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
