"use client"

import { useState } from 'react'
import { MapPin, Star, Clock, ChevronDown, ChevronUp } from 'lucide-react'

// 美食数据 - 使用确认有效的 Unsplash 图片
const foods = [
  {
    id: 1,
    name: '广州酒家',
    description: '广州酒家创始于1939年，是广州最著名的老字号酒家之一，以正宗粤菜和精美点心闻名。',
    location: '荔湾区文昌北路22号',
    rating: 4.7,
    price: '80-150',
    cuisine: '粤菜',
    hours: '07:00-22:00',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    featured: ['虾饺', '烧麦', '叉烧包', '文昌鸡']
  },
  {
    id: 2,
    name: '陶陶居',
    description: '陶陶居始创于1880年，是广州现存最古老的茶楼之一，中华老字号。',
    location: '荔湾区第十甫路20号',
    rating: 4.6,
    price: '70-120',
    cuisine: '早茶',
    hours: '08:00-21:00',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    featured: ['陶陶居招牌月饼', '鲜虾饺', 'XO酱萝卜糕']
  },
  {
    id: 3,
    name: '点都德',
    description: '点都德是广州知名的连锁茶楼，主打创新粤式点心，环境时尚舒适。',
    location: '越秀区惠福东路519号',
    rating: 4.5,
    price: '60-100',
    cuisine: '早茶',
    hours: '07:00-23:00',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    featured: ['金沙红米肠', '日式青芥末虾', '松化鸡蛋散']
  },
  {
    id: 4,
    name: '炳胜品味',
    description: '炳胜是广州知名粤菜品牌，主打高品质粤菜和生猛海鲜，是商务宴请的好去处。',
    location: '天河区珠江新城花城大道84号',
    rating: 4.8,
    price: '150-300',
    cuisine: '粤菜',
    hours: '11:00-14:30, 17:00-22:00',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    featured: ['秘制黑叉烧', '捞起鱼生', '脆皮叉烧']
  },
  {
    id: 5,
    name: '惠食佳',
    description: '惠食佳以生啫系列菜品闻名，是广州啫煲的代表餐厅。',
    location: '海珠区滨江西路128号',
    rating: 4.6,
    price: '80-150',
    cuisine: '粤菜',
    hours: '11:00-14:00, 17:00-21:30',
    image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80',
    featured: ['黄鳝啫煲', '生啫牛肉', '啫菜心']
  },
  {
    id: 6,
    name: '莲香楼',
    description: '莲香楼始创于1889年，是广州著名的老字号饼家，以莲蓉月饼和传统糕点著称。',
    location: '荔湾区第十甫路67号',
    rating: 4.4,
    price: '50-100',
    cuisine: '小吃',
    hours: '07:00-22:00',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    featured: ['莲蓉月饼', '鸡仔饼', '嫁女饼']
  },
  {
    id: 7,
    name: '南信甜品',
    description: '南信是广州最著名的甜品店之一，双皮奶，姜汁撞奶等甜品远近闻名。',
    location: '荔湾区第十甫路125号',
    rating: 4.7,
    price: '15-40',
    cuisine: '甜品',
    hours: '11:00-23:00',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    featured: ['双皮奶', '姜汁撞奶', '凤凰奶糊']
  },
  {
    id: 8,
    name: '银记肠粉',
    description: '银记肠粉是广州肠粉的代表品牌，以布拉肠粉闻名。',
    location: '越秀区惠福东路421号',
    rating: 4.5,
    price: '15-35',
    cuisine: '小吃',
    hours: '07:00-22:00',
    image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80',
    featured: ['牛肉肠', '鲜虾肠', '叉烧肠']
  }
]

const cuisines = ['全部', '粤菜', '早茶', '小吃', '甜品']

export default function FoodPage() {
  const [activeCuisine, setActiveCuisine] = useState('全部')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredFoods = foods.filter(item => 
    activeCuisine === '全部' || item.cuisine === activeCuisine
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-orange-900 via-slate-900 to-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 right-20 text-9xl">🥟</div>
          <div className="absolute bottom-10 left-20 text-9xl">🍜</div>
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🍜 广州美食</h1>
          <p className="text-xl text-slate-300">食在广州，味在岭南</p>
        </div>
      </div>

      {/* Cuisine Filter */}
      <div className="sticky top-16 z-40 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 flex-wrap justify-center">
            {cuisines.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCuisine(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCuisine === cat
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Food List */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-4">
        {filteredFoods.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 rounded-2xl overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 h-48 md:h-auto shrink-0 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xl font-bold text-white drop-shadow-lg">
                  {item.name}
                </div>
              </div>
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs">
                      {item.cuisine}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {item.hours}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-400">¥{item.price}/人</span>
                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {expandedId === item.id ? '收起' : '查看详情'}
                    {expandedId === item.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
                
                {expandedId === item.id && (
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <h4 className="text-sm font-medium text-white mb-2">招牌推荐：</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.featured.map((dish, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {filteredFoods.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍜</div>
            <h3 className="text-xl font-semibold text-white mb-2">暂无相关美食</h3>
            <p className="text-slate-400">试试其他分类</p>
          </div>
        )}
      </div>
    </div>
  )
}
