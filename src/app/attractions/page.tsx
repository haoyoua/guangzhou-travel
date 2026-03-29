"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Heart, Clock, ArrowRight } from 'lucide-react'

// 景点数据 - 使用确认有效的 Unsplash 图片
const attractions = [
  {
    id: 1,
    name: '广州塔',
    description: '广州塔（Canton Tower）昵称"小蛮腰"，总高度454米，是中国第三高塔，世界第七高塔。广州市地标性建筑，塔身造型独特，夜间灯光璀璨。',
    location: '海珠区阅江西路222号',
    rating: 4.8,
    price: '150',
    duration: '2-3小时',
    image: 'https://images.unsplash.com/photo-1551244026-bc622a711638?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: '观光',
    tips: ['建议傍晚登塔，可看日落和夜景', '周末需提前预约', '摩天轮需额外购票'],
    transport: '地铁3号线广州塔站A出口'
  },
  {
    id: 2,
    name: '白云山',
    description: '白云山位于广州市白云区，为南粤名山之一，自古就有"羊城第一秀"之称。主峰摩星岭高382米，植被丰富，风景秀丽。',
    location: '白云区白云山风景名胜区',
    rating: 4.6,
    price: '5',
    duration: '3-5小时',
    image: 'https://pic.baike.soso.com/ugc/baikepic/42711/20250828211236-1291219273.jpg',
    category: '自然',
    tips: ['建议从南门进入，景点更集中', '春季杜鹃花开时最美', '山上有多个观景台'],
    transport: '地铁2号线白云文化广场站转公交'
  },
  {
    id: 3,
    name: '陈家祠',
    description: '陈家祠又称陈氏书院，是广东现存规模最大、保存最完整、装饰最精美的清代宗祠建筑群。',
    location: '荔湾区中山七路恩龙里34号',
    rating: 4.7,
    price: '10',
    duration: '1-2小时',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/39502/20250925191746-1866277813.jpg',
    category: '文化',
    tips: ['建议请讲解员了解历史', '周一闭馆', '周边有荔枝湾涌可顺便游览'],
    transport: '地铁1号线陈家祠站D出口'
  },
  {
    id: 4,
    name: '沙面岛',
    description: '沙面是广州最具异国情调的欧洲建筑群，原是英法租界保留至今的欧洲建筑群。',
    location: '荔湾区沙面大街',
    rating: 4.6,
    price: '免费',
    duration: '2-3小时',
    image: 'https://pic.baike.soso.com/ugc/baikepic/24881/20230420223242-1462794442.jpg',
    category: '文化',
    tips: ['适合拍照打卡', '建议早上或傍晚时分游览', '周边有粤海关博物馆'],
    transport: '地铁1号线黄沙站E出口'
  },
  {
    id: 5,
    name: '北京路步行街',
    description: '北京路步行街是广州最繁华的商业中心之一，也是广州历史上最中心的商业街。',
    location: '越秀区北京路',
    rating: 4.5,
    price: '免费',
    duration: '2-4小时',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    category: '购物',
    tips: ['晚上灯光璀璨更漂亮', '周边有南越王宫博物馆', '美食店铺林立'],
    transport: '地铁1号线公元前站'
  },
  {
    id: 6,
    name: '珠江夜游',
    description: '珠江夜游是广州特色旅游项目，乘船沿珠江航行，可欣赏到广州塔等标志性建筑的璀璨夜景。',
    location: '天河区天字码头/西堤码头',
    rating: 4.7,
    price: '80',
    duration: '1.5小时',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    category: '观光',
    tips: ['建议提前预约船票', '选择靠窗位置拍照更好', '晚餐后游览最佳'],
    transport: '地铁2号线市二宫站'
  },
  {
    id: 7,
    name: '越秀公园',
    description: '越秀公园是广州最大的综合性公园，面积达86万平方米。园内有五羊石雕、镇海楼等著名景点。',
    location: '越秀区解放北路988号',
    rating: 4.5,
    price: '免费',
    duration: '2-3小时',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    category: '自然',
    tips: ['五羊石雕是必打卡点', '镇海楼内可了解广州历史', '公园内可乘坐观光车'],
    transport: '地铁2号线越秀公园站'
  },
  {
    id: 8,
    name: '永庆坊',
    description: '永庆坊位于荔湾区恩宁路，是广州最完整、最具岭南特色的骑楼街区。',
    location: '荔湾区恩宁路127号',
    rating: 4.4,
    price: '免费',
    duration: '2-3小时',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
    category: '文化',
    tips: ['文艺小店林立，适合拍照', '晚上灯光更美', '可结合荔枝湾涌一起游览'],
    transport: '地铁1号线黄沙站B出口'
  }
]

const categories = ['全部', '观光', '自然', '文化', '购物']

export default function AttractionsPage() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredAttractions = attractions.filter(item => {
    const matchCategory = activeCategory === '全部' || item.category === activeCategory
    const matchSearch = item.name.includes(searchQuery) || item.location.includes(searchQuery)
    return matchCategory && matchSearch
  })

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-red-900 via-slate-900 to-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 left-20 text-9xl">🗼</div>
          <div className="absolute bottom-10 right-20 text-9xl">⛰️</div>
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🏛️ 广州景点</h1>
          <p className="text-xl text-slate-300">探索羊城魅力，发现岭南之美</p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="搜索景点..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 focus:border-orange-500 text-white placeholder-slate-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-slate-400 mb-6">共 {filteredAttractions.length} 个景点</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAttractions.map((item) => (
            <Link
              key={item.id}
              href={`/attractions/${item.id}`}
              className="group bg-slate-800 rounded-2xl overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={(e) => toggleFavorite(e, item.id)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </button>
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-orange-500/90 text-white text-sm font-medium backdrop-blur-sm">
                  {item.category}
                </span>
                <div className="absolute bottom-3 right-3 text-lg font-bold text-white drop-shadow-lg">
                  {item.name}
                </div>
              </div>
              <div className="p-5">
                <p className="text-slate-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{item.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm border-t border-slate-700 pt-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white">{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                  <span className="text-orange-400 font-bold">{item.price}</span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-orange-400 text-sm font-medium group-hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAttractions.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">未找到相关景点</h3>
            <p className="text-slate-400">试试其他关键词或分类</p>
          </div>
        )}
      </div>
    </div>
  )
}
