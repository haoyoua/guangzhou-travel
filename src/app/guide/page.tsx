"use client"

import { useState } from 'react'
import { Calendar, MapPin, Star, ChevronRight, Eye, Heart, Clock, User } from 'lucide-react'

interface Guide {
  id: number
  title: string
  description: string
  author: string
  date: string
  views: number
  likes: number
  image: string
  category: string
  readTime: string
}

const guides: Guide[] = [
  {
    id: 1,
    title: '广州塔登塔全攻略 - 2026最新票价和开放时间',
    description: '详细介绍广州塔各个观光层的游览体验，包括摩天轮、极速云霄等刺激项目，还有隐藏的拍照打卡点',
    author: '广州通',
    date: '2026-03-15',
    views: 12580,
    likes: 892,
    image: 'https://images.unsplash.com/photo-1567001909734-0c3e21c0c1cb?w=800&q=80',
    category: '景点攻略',
    readTime: '8分钟'
  },
  {
    id: 2,
    title: '广州早茶最强攻略 - 10家老字号推荐',
    description: '从陶陶居到点都德，从老城区到天河区，总结广州最值得一试的早茶店，还有隐藏的点单技巧',
    author: '美食侦探',
    date: '2026-03-10',
    views: 23450,
    likes: 1653,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    category: '美食攻略',
    readTime: '12分钟'
  },
  {
    id: 3,
    title: '沙面岛拍照攻略 - 教你拍出异国风情大片',
    description: '沙面岛最佳拍照位置、穿搭建议、拍摄时间分析，还有周边美食推荐，是文艺青年的必打卡地',
    author: '摄影达人',
    date: '2026-03-08',
    views: 9876,
    likes: 734,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: '拍照攻略',
    readTime: '6分钟'
  },
  {
    id: 4,
    title: '广州地铁全攻略 - 景点交通一篇搞定',
    description: '广州地铁18条线路全解析，主要景点地铁到达方案，还有地铁换乘小技巧和优惠信息',
    author: '出行专家',
    date: '2026-03-05',
    views: 31200,
    likes: 2100,
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f7c4f1e8?w=800&q=80',
    category: '交通攻略',
    readTime: '10分钟'
  },
  {
    id: 5,
    title: '广州三天两夜深度游 - 本地人私藏路线',
    description: '避开游客高峰，体验最地道的广州。包含早餐、午餐、晚餐推荐，还有本地人才知道的小众景点',
    author: '本地向导',
    date: '2026-03-01',
    views: 18760,
    likes: 1345,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    category: '行程规划',
    readTime: '15分钟'
  },
  {
    id: 6,
    title: '长隆野生动物世界亲子游 - 必看表演时间表',
    description: '带娃必看！详细分析各区域动物、表演时间表、亲子设施，还有快速通道和防坑指南',
    author: '遛娃妈妈',
    date: '2026-02-28',
    views: 15670,
    likes: 1120,
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
    category: '亲子游',
    readTime: '10分钟'
  },
]

const categories = ['全部', '景点攻略', '美食攻略', '拍照攻略', '交通攻略', '行程规划', '亲子游']

export default function GuidePage() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGuides = guides.filter(guide => {
    const matchCategory = activeCategory === '全部' || guide.category === activeCategory
    const matchSearch = guide.title.includes(searchQuery) || guide.description.includes(searchQuery)
    return matchCategory && matchSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1567001909734-0c3e21c0c1cb?w=1920&q=80" 
            alt="广州攻略"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">📝 广州攻略</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl text-center">
            达人经验分享，让你的旅行更轻松
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="搜索攻略..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border-0 focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide) => (
            <article 
              key={guide.id} 
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-sm font-medium">
                    {guide.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-3 text-white text-sm">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {guide.views > 10000 ? `${(guide.views/10000).toFixed(1)}w` : guide.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {guide.likes}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {guide.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{guide.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400">未找到相关攻略</h3>
            <p className="text-slate-500">试试其他关键词</p>
          </div>
        )}
      </div>
    </div>
  )
}
