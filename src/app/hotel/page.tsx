"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Heart, Wifi, Car, Coffee, ChevronRight, Check } from 'lucide-react'

interface Hotel {
  id: number
  name: string
  description: string
  location: string
  rating: number
  price: string
  image: string
  district: string
  amenities: string[]
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: '广州四季酒店',
    description: '位于珠江新城核心地段，可俯瞰珠江夜景，米其林餐厅',
    location: '天河区珠江新城',
    rating: 4.9,
    price: '¥1500 起',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    district: '天河区',
    amenities: ['WiFi', '游泳池', '健身房', '餐厅']
  },
  {
    id: 2,
    name: '广州白天鹅宾馆',
    description: '中国第一家中外合作五星级酒店，临江而建，园林式设计',
    location: '荔湾区沙面',
    rating: 4.8,
    price: '¥800 起',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    district: '荔湾区',
    amenities: ['WiFi', '游泳池', '停车场', '餐厅']
  },
  {
    id: 3,
    name: '广州瑰丽酒店',
    description: '全球最高酒店之一，位于周大福金融中心，奢华体验',
    location: '天河区珠江新城',
    rating: 4.9,
    price: '¥2000 起',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    district: '天河区',
    amenities: ['WiFi', '天际泳池', '健身房', 'spa']
  },
  {
    id: 4,
    name: '广州长隆酒店',
    description: '靠近长隆野生动物世界，主题亲子酒店',
    location: '番禺区长隆',
    rating: 4.7,
    price: '¥600 起',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    district: '番禺区',
    amenities: ['WiFi', '游泳池', '儿童乐园', '动物园']
  },
  {
    id: 5,
    name: '广州香格里拉大酒店',
    description: '临江而建，配套设施完善，服务一流',
    location: '海珠区琶洲',
    rating: 4.8,
    price: '¥900 起',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    district: '海珠区',
    amenities: ['WiFi', '游泳池', '健身房', '餐厅']
  },
  {
    id: 6,
    name: '广州花园酒店',
    description: '市区老牌五星级酒店，位置优越，性价比高',
    location: '越秀区环市东路',
    rating: 4.6,
    price: '¥500 起',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    district: '越秀区',
    amenities: ['WiFi', '停车场', '餐厅', '商务中心']
  },
]

const districts = ['全部', '天河区', '荔湾区', '越秀区', '番禺区', '海珠区']

export default function HotelPage() {
  const [activeDistrict, setActiveDistrict] = useState('全部')
  const [priceRange, setPriceRange] = useState('all')

  const filteredHotels = hotels.filter(item => {
    const matchDistrict = activeDistrict === '全部' || item.district === activeDistrict
    return matchDistrict
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" 
            alt="广州酒店"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🏨 广州酒店</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl text-center">
            精选广州优质酒店，让旅程更舒适
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {districts.map(district => (
                <button
                  key={district}
                  onClick={() => setActiveDistrict(district)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeDistrict === district
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {district}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id} 
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Heart className="w-5 h-5 text-slate-600" />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 text-white text-sm font-medium">
                    {hotel.district}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{hotel.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {hotel.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {hotel.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex gap-2 flex-wrap mb-4">
                  {hotel.amenities.map(amenity => (
                    <span key={amenity} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs">
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-2xl font-bold text-orange-500">{hotel.price}</span>
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:shadow-lg transition-shadow">
                    预订
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
