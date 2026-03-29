"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Star, Clock, DollarSign, ArrowLeft, Heart, Share2 } from 'lucide-react'

const attractions = [
  {
    id: 1,
    name: '广州塔（小蛮腰）',
    description: '广州塔（Canton Tower）又称广州新电视塔，昵称小蛮腰，位于中国广州市海珠区阅江西路222号，总高度600米，是中国第三高塔，世界第七高塔。广州塔具有广播电视发射、文化旅游、观光展示等功能，是广州市的地标性建筑。',
    location: '海珠区阅江西路',
    rating: 4.8,
    price: '¥150 起',
    duration: '2-3小时',
    image: 'https://images.unsplash.com/photo-1567001909734-0c3e21c0c1cb?w=1200&q=80',
    category: '观光',
    tips: ['建议傍晚时分登塔，可以欣赏日落和夜景', '周末人较多，建议提前预约门票', '摩天轮需要额外购票'],
    transport: '地铁3号线广州塔站A出口'
  },
  {
    id: 2,
    name: '白云山',
    description: '白云山位于广州市白云区，为南粤名山之一，自古就有“羊城第一秀”之称。白云山面积28平方公里，主峰摩星岭高382米，植被丰富，风景秀丽，是广州市民休闲健身的首选之地。',
    location: '白云区白云山',
    rating: 4.6,
    price: '¥5 起',
    duration: '3-5小时',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    category: '自然',
    tips: ['建议从南门进入，景点更集中', '春季杜鹃花开时最美', '山上有多个观景台'],
    transport: '地铁2号线白云文化广场站'
  },
  {
    id: 3,
    name: '陈家祠',
    description: '陈家祠又称陈氏书院，是广东现存规模最大、保存最完整、装饰最精美的清代宗祠建筑群。书院建筑布局严谨，装饰工艺精湛，涵盖木雕、石雕、砖雕、陶塑、灰塑等岭南传统工艺精品。',
    location: '荔湾区中山七路',
    rating: 4.7,
    price: '¥10',
    duration: '1-2小时',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80',
    category: '文化',
    tips: ['建议请讲解员了解历史', '周一闭馆', '周边有荔枝湾涌可顺便游览'],
    transport: '地铁1号线陈家祠站'
  },
  {
    id: 4,
    name: '沙面岛',
    description: '沙面是广州最具异国情调的旅游景点，原是英法租界保留至今的欧洲建筑群。这里汇集了巴洛克式、哥特式、折衷主义等多种建筑风格，是广州著名的外事游览区和历史文物保护区。',
    location: '荔湾区沙面',
    rating: 4.6,
    price: '免费',
    duration: '2-3小时',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    category: '文化',
    tips: ['适合拍照打卡', '建议早上或傍晚时分游览', '周边有粤海关博物馆'],
    transport: '地铁1号线黄沙站'
  },
  {
    id: 5,
    name: '北京路步行街',
    description: '北京路步行街是广州最繁华的商业中心之一，也是广州历史上最中心的商业街。街道两旁商厦林立，汇集了大型商场、专卖店、老字号店铺，是购物美食的好去处。',
    location: '越秀区北京路',
    rating: 4.5,
    price: '免费',
    duration: '2-4小时',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80',
    category: '购物',
    tips: ['晚上灯光璀璨更漂亮', '周边有南越王宫博物馆', '美食店铺林立'],
    transport: '地铁1号线公元前站'
  },
  {
    id: 6,
    name: '珠江夜游',
    description: '珠江夜游是广州特色旅游项目，乘船沿珠江航行，可欣赏到广州塔、海心沙、珠江新城CBD等多个标志性建筑的璀璨夜景，是体验广州夜色魅力的最佳方式。',
    location: '天河区天字码头',
    rating: 4.7,
    price: '¥80 起',
    duration: '1.5小时',
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f7c4f1e8?w=1200&q=80',
    category: '观光',
    tips: ['建议提前预约船票', '选择靠窗位置拍照更好', '晚餐后游览最佳'],
    transport: '地铁2号线市二宫站'
  },
]

export default function AttractionDetail() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const attraction = attractions.find(a => a.id === id)

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">景点未找到</h1>
          <Link href="/attractions" className="text-orange-500 hover:underline">
            返回景点列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img 
          src={attraction.image} 
          alt={attraction.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
        
        <Link 
          href="/attractions"
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-white bg-black/30 px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10 pb-20">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-2">
                {attraction.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">{attraction.name}</h1>
              <div className="flex items-center gap-4 mt-2 text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {attraction.location}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {attraction.rating}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 text-center">
              <DollarSign className="w-6 h-6 mx-auto text-orange-500 mb-1" />
              <div className="text-lg font-bold text-orange-600">{attraction.price}</div>
              <div className="text-sm text-slate-500">门票价格</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 text-center">
              <Clock className="w-6 h-6 mx-auto text-blue-500 mb-1" />
              <div className="text-lg font-bold text-blue-600">{attraction.duration}</div>
              <div className="text-sm text-slate-500">建议游玩</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 text-center">
              <MapPin className="w-6 h-6 mx-auto text-green-500 mb-1" />
              <div className="text-sm font-bold text-green-600">地铁直达</div>
              <div className="text-sm text-slate-500">交通方式</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">景点介绍</h2>
            <p className="text-slate-600 leading-relaxed">{attraction.description}</p>
          </div>

          {/* Tips */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">💡 游玩贴士</h2>
            <ul className="space-y-2">
              {attraction.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Transport */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">🚇 交通指南</h2>
            <p className="text-slate-600">{attraction.transport}</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:shadow-lg transition-shadow">
              立即购票
            </button>
            <Link 
              href="/attractions"
              className="flex-1 py-4 border-2 border-slate-200 text-slate-600 rounded-xl font-bold text-center hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              查看更多景点
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
