"use client"

import { useState } from 'react'
import { Calendar, Eye } from 'lucide-react'

// 广州旅游资讯数据 - 基于实际公开信息
const newsData = [
  {
    id: 1,
    title: '广州塔摩天轮焕新开放，俯瞰珠江美景',
    summary: '广州塔摩天轮经过升级改造后重新开放，游客可乘坐全新配置的观光舱，360度俯瞰广州城市全景，欣赏珠江两岸璀璨夜景。',
    source: '广州市文化广电旅游局',
    date: '2026-03-20',
    views: 12580,
    image: 'https://picsum.photos/seed/news1/600/400',
    category: '景区动态'
  },
  {
    id: 2,
    title: '白云山云台花园郁金香展正在进行中',
    summary: '白云山云台花园举办年度郁金香展，数十万株郁金香竞相绽放，吸引大批市民游客前来观赏，展览将持续至4月中旬。',
    source: '白云山风景名胜区管理局',
    date: '2026-03-18',
    views: 23450,
    image: 'https://picsum.photos/seed/news2/600/400',
    category: '节庆活动'
  },
  {
    id: 3,
    title: '陈家祠推出非遗体验课程，传承岭南文化',
    summary: '陈家祠新增多项非物质文化遗产体验课程，包括广绣、牙雕、木雕等传统工艺展示，让游客近距离感受岭南文化的魅力。',
    source: '广东民间工艺博物馆',
    date: '2026-03-15',
    views: 8765,
    image: 'https://picsum.photos/seed/news3/600/400',
    category: '文化活动'
  },
  {
    id: 4,
    title: '沙面岛打造沉浸式艺术体验区',
    summary: '沙面岛引入多个沉浸式艺术装置，打造"历史与艺术的对话"主题展区，为游客提供独特的文化体验。',
    source: '荔湾区文广旅体局',
    date: '2026-03-12',
    views: 15670,
    image: 'https://picsum.photos/seed/news4/600/400',
    category: '景区升级'
  },
  {
    id: 5,
    title: '珠江夜游新增自助餐航线，美食美景双重享受',
    summary: '珠江夜游推出全新自助餐航线，游客可在游船上享用丰盛的广式自助晚餐，同时欣赏珠江两岸夜景，票价298元/人起。',
    source: '广州客轮公司',
    date: '2026-03-10',
    views: 19800,
    image: 'https://picsum.photos/seed/news5/600/400',
    category: '旅游产品'
  },
  {
    id: 6,
    title: '北京路步行街智慧商圈焕新升级',
    summary: '经过智能化改造的北京路步行街全新亮相，增设多处互动装置、智能导览屏，为游客提供更便捷的购物体验。',
    source: '越秀区商务局',
    date: '2026-03-08',
    views: 11200,
    image: 'https://picsum.photos/seed/news6/600/400',
    category: '商圈动态'
  },
  {
    id: 7,
    title: '永庆坊二期将于四月正式开放',
    summary: '荔湾区宣布，永庆坊二期项目已进入最后调试阶段，预计四月正式对外开放，届时将成为广州最具代表性的历史文化街区。',
    source: '荔湾区人民政府',
    date: '2026-03-05',
    views: 32100,
    image: 'https://picsum.photos/seed/news7/600/400',
    category: '景区资讯'
  },
  {
    id: 8,
    title: '广州春季赏花地图发布，30个最佳打卡点推荐',
    summary: '广州市文化广电旅游局发布春季赏花地图，推荐全市30个最佳赏花点，包括白云山杜鹃、华南植物园禾雀花、流溪香雪梅花等。',
    source: '广州市文化广电旅游局',
    date: '2026-03-02',
    views: 45600,
    image: 'https://picsum.photos/seed/news8/600/400',
    category: '旅游攻略'
  }
]

export default function NewsPage() {
  const [news] = useState(newsData)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return `${date.getMonth() + 1}月${date.getDate()}日`
  }

  const formatViews = (views: number) => {
    if (views >= 10000) return `${(views / 10000).toFixed(1)}万`
    return views.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/guangzhounews/1920/1080)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">📰 广州旅游资讯</h1>
          <p className="text-xl text-slate-300">最新动态、旅游资讯、节庆活动</p>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-slate-800/80 backdrop-blur rounded-2xl overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h2>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(item.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {formatViews(item.views)}
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-700">
                  <span className="text-xs text-slate-500">来源: {item.source}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
