"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPin, Star, ChevronRight, ArrowRight, Calendar, BookOpen } from 'lucide-react'

// 景点数据 - 使用确认有效的 Unsplash 图片
const featuredAttractions = [
  {
    id: 1,
    name: '广州塔',
    description: '中国第三高塔，广州地标建筑，昵称"小蛮腰"，塔身总高度454米，夜景璀璨夺目',
    image: 'https://images.unsplash.com/photo-1551244026-bc622a711638?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    price: '150',
    tag: '地标'
  },
  {
    id: 2,
    name: '陈家祠',
    description: '岭南建筑艺术瑰宝，广东现存规模最大，保存最完整的清代宗祠建筑群',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/39502/20250925191746-1866277813.jpg',
    rating: 4.7,
    price: '10',
    tag: '历史'
  },
  {
    id: 3,
    name: '白云山',
    description: '南粤名山之一，"羊城第一秀"，主峰摩星岭海拔382米',
    image: 'https://pic.baike.soso.com/ugc/baikepic/42711/20250828211236-1291219273.jpg',
    rating: 4.6,
    price: '5',
    tag: '自然'
  },
  {
    id: 4,
    name: '沙面岛',
    description: '广州最具异国情调的欧洲建筑群，原英法租界',
    image: 'https://pic.baike.soso.com/ugc/baikepic/24881/20230420223242-1462794442.jpg',
    rating: 4.6,
    price: '免费',
    tag: '文化'
  }
]

// 美食数据 - 使用确认有效的 Unsplash 图片
const featuredFoods = [
  {
    id: 1,
    name: '广式早茶',
    description: '粤式茶点代表，虾饺、烧麦、叉烧包、蛋挞等',
    image: 'https://pic.chinanews.com.cn/chn/2025/0919/3833874.jpg',
    rating: 4.9,
    price: '60-100'
  },
  {
    id: 2,
    name: '白切鸡',
    description: '粤菜经典，皮爽肉滑，保持原汁原味',
    image: 'https://pic.nfapp.southcn.com/nfplus/ossfs/pic/20231021/20231021120807_8471.jpg',
    rating: 4.7,
    price: '40-80'
  },
  {
    id: 3,
    name: '煲仔饭',
    description: '砂锅焖制米饭，腊味飘香，锅底焦香酥脆',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43342/20241122172722-1777713117.jpg',
    rating: 4.6,
    price: '35-60'
  },
  {
    id: 4,
    name: '双皮奶',
    description: '顺德大良传统甜品，奶香浓郁，入口即化',
    image: 'https://pic.baike.soso.com/ugc/baikepic/37273/20220929171207-2126434176.jpg',
    rating: 4.8,
    price: '15-30'
  }
]

const stats = [
  { value: '2200+', label: '年历史' },
  { value: '100+', label: '著名景点' },
  { value: '5000+', label: '美食选择' },
  { value: '18', label: '地铁线路' }
]

export default function HomePage() {
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center drop-shadow-lg">
            🏯 广州之旅
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center text-white/90">
            探索千年商都，品味岭南风情
          </p>
          
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-full p-2 flex items-center mb-8 border border-white/20">
            <input
              type="text"
              placeholder="搜索景点、美食、酒店..."
              className="flex-1 bg-transparent text-white placeholder-white/60 px-4 py-3 outline-none"
            />
            <Link href="/search" className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-medium hover:opacity-90 transition-opacity">
              搜索
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 ${
                  currentStat === index ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white/60 rotate-90" />
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">🏛️ 精选景点</h2>
              <p className="text-slate-400">发现广州最值得游玩的景点</p>
            </div>
            <Link href="/attractions" className="hidden md:flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
              查看更多 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAttractions.map((item) => (
              <Link
                key={item.id}
                href={`/attractions/${item.id}`}
                className="group bg-slate-800 rounded-2xl overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500/90 text-white text-sm font-medium">
                    {item.tag}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <span className="text-orange-400 font-bold">
                      {item.price === '免费' ? '免费' : `¥${item.price}起`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Foods */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">🍜 特色美食</h2>
              <p className="text-slate-400">品尝地道的广州味道</p>
            </div>
            <Link href="/food" className="hidden md:flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
              查看更多 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFoods.map((item) => (
              <div
                key={item.id}
                className="group bg-slate-800 rounded-2xl overflow-hidden hover:ring-2 hover:ring-red-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <span className="text-red-400 font-bold">¥{item.price}/人</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏛️', name: '景点', href: '/attractions', desc: '发现魅力', color: 'from-orange-500 to-red-500' },
              { icon: '🍜', name: '美食', href: '/food', desc: '品味广州', color: 'from-amber-500 to-yellow-500' },
              { icon: '🏨', name: '酒店', href: '/hotel', desc: '舒适住宿', color: 'from-blue-500 to-cyan-500' },
              { icon: '📅', name: '行程', href: '/itinerary', desc: '规划旅程', color: 'from-purple-500 to-pink-500' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group p-8 bg-slate-800 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备开始你的广州之旅了吗？</h2>
          <p className="text-white/80 mb-8">探索精心设计的行程路线，让旅行更加轻松愉快</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/itinerary" className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-white/90 transition-colors flex items-center gap-2 shadow-lg">
              <Calendar className="w-5 h-5" /> 查看行程规划
            </Link>
            <Link href="/guide" className="px-8 py-4 bg-white/20 backdrop-blur rounded-full font-bold hover:bg-white/30 transition-colors flex items-center gap-2 border border-white/30">
              <BookOpen className="w-5 h-5" /> 阅读攻略
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
