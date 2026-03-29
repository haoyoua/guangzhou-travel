"use client"

import { useState } from 'react'
import { MapPin, Clock, DollarSign, Star, ChevronRight, Calendar, Users, Camera, Coffee } from 'lucide-react'

interface Day {
  day: number
  theme: string
  activities: Activity[]
}

interface Activity {
  time: string
  name: string
  description: string
  location: string
  duration: string
  cost: string
  icon: string
}

const itineraries = [
  {
    id: 1,
    name: '3天2晚经典游',
    description: '广州必打卡景点全覆盖，感受岭南文化精髓',
    days: 3,
    nights: 2,
    rating: 4.8,
    price: '¥800',
    image: 'https://images.unsplash.com/photo-1567001909734-0c3e21c0c1cb?w=800&q=80',
    suitable: '首次来广州游客',
    highlights: ['广州塔', '珠江夜游', '陈家祠', '上下九'],
    schedule: [
      {
        day: 1,
        theme: '现代广州探秘',
        activities: [
          { time: '09:00', name: '抵达广州', description: '前往酒店办理入住', location: '天河区', duration: '1小时', cost: '¥0', icon: '🏨' },
          { time: '10:30', name: '广州塔登塔', description: '登塔观光，俯瞰广州全景', location: '海珠区', duration: '2小时', cost: '¥150', icon: '🗼' },
          { time: '13:00', name: '午餐', description: '品尝广式美食', location: '天河城', duration: '1小时', cost: '¥80', icon: '🍜' },
          { time: '14:30', name: '珠江新城漫步', description: '游览CBD核心区', location: '天河区', duration: '2小时', cost: '¥0', icon: '🚶' },
          { time: '18:00', name: '珠江夜游', description: '乘船欣赏珠江夜景', location: '天字码头', duration: '1.5小时', cost: '¥80', icon: '🚢' },
          { time: '20:00', name: '晚餐', description: '品尝广州夜宵', location: '北京路', duration: '1小时', cost: '¥60', icon: '🍲' },
        ]
      },
      {
        day: 2,
        theme: '岭南文化深度游',
        activities: [
          { time: '08:00', name: '早茶时间', description: '体验广州早茶文化', location: '酒店', duration: '1.5小时', cost: '¥50', icon: '🥟' },
          { time: '10:00', name: '陈家祠', description: '参观岭南建筑艺术', location: '荔湾区', duration: '2小时', cost: '¥10', icon: '🏛️' },
          { time: '12:30', name: '午餐', description: '荔湾区老字号', location: '荔湾区', duration: '1小时', cost: '¥60', icon: '🍜' },
          { time: '14:00', name: '沙面岛', description: '漫步欧陆风情街区', location: '荔湾区', duration: '2小时', cost: '¥0', icon: '🏝️' },
          { time: '16:30', name: '永庆坊', description: '文艺小清新打卡', location: '荔湾区', duration: '1.5小时', cost: '¥0', icon: '📷' },
          { time: '18:30', name: '上下九步行街', description: '购物与美食', location: '荔湾区', duration: '2小时', cost: '¥100', icon: '🛍️' },
        ]
      },
      {
        day: 3,
        theme: '自然与人文',
        activities: [
          { time: '08:30', name: '白云山', description: '登山俯瞰广州', location: '白云区', duration: '3小时', cost: '¥5', icon: '⛰️' },
          { time: '12:00', name: '午餐', description: '白云山特色美食', location: '白云区', duration: '1小时', cost: '¥60', icon: '🍜' },
          { time: '13:30', name: '越秀公园', description: '参观五羊石雕、镇海楼', location: '越秀区', duration: '2小时', cost: '¥0', icon: '🏞️' },
          { time: '16:00', name: '返程', description: '带着美好回忆回家', location: '广州', duration: '', cost: '¥0', icon: '✈️' },
        ]
      }
    ]
  },
  {
    id: 2,
    name: '5天4晚深度游',
    description: '更深度体验广州，探访小众秘境',
    days: 5,
    nights: 4,
    rating: 4.9,
    price: '¥1500',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    suitable: '休闲深度游爱好者',
    highlights: ['长隆野生动物世界', '从化温泉', '黄埔军校', '大夫山'],
    schedule: [
      {
        day: 1,
        theme: '初识广州',
        activities: [
          { time: '09:00', name: '抵达入住', description: '天河区酒店', location: '天河区', duration: '1小时', cost: '¥0', icon: '🏨' },
          { time: '14:00', name: '广州塔', description: '登塔观光', location: '海珠区', duration: '2小时', cost: '¥150', icon: '🗼' },
          { time: '18:00', name: '珠江夜游', description: '夜游珠江', location: '天字码头', duration: '1.5小时', cost: '¥80', icon: '🚢' },
        ]
      },
      {
        day: 2,
        theme: '文化探秘',
        activities: [
          { time: '08:00', name: '早茶', description: '地道早茶', location: '荔湾区', duration: '1.5小时', cost: '¥60', icon: '🥟' },
          { time: '10:00', name: '陈家祠', description: '岭南建筑', location: '荔湾区', duration: '2小时', cost: '¥10', icon: '🏛️' },
          { time: '14:00', name: '沙面岛', description: '欧陆风情', location: '荔湾区', duration: '2小时', cost: '¥0', icon: '🏝️' },
          { time: '18:00', name: '晚餐', description: '上下九美食', location: '荔湾区', duration: '1.5小时', cost: '¥80', icon: '🍜' },
        ]
      },
      {
        day: 3,
        theme: '亲子乐翻天',
        activities: [
          { time: '09:00', name: '长隆野生动物世界', description: '动物王国探险', location: '番禺区', duration: '全天', cost: '¥295', icon: '🦁' },
          { time: '20:00', name: '长隆大马戏', description: '精彩马戏表演', location: '番禺区', duration: '2小时', cost: '¥280', icon: '🎪' },
        ]
      },
      {
        day: 4,
        theme: '自然休闲',
        activities: [
          { time: '08:30', name: '白云山', description: '森林吸氧', location: '白云区', duration: '3小时', cost: '¥5', icon: '⛰️' },
          { time: '14:00', name: '从化温泉', description: '泡温泉放松', location: '从化区', duration: '3小时', cost: '¥128', icon: '♨️' },
          { time: '18:00', name: '温泉晚餐', description: '养生美食', location: '从化区', duration: '1小时', cost: '¥80', icon: '🍲' },
        ]
      },
      {
        day: 5,
        theme: '告别广州',
        activities: [
          { time: '09:00', name: '黄埔军校', description: '历史纪念馆', location: '黄埔区', duration: '2小时', cost: '¥0', icon: '🏫' },
          { time: '12:00', name: '午餐', description: '黄埔军校美食', location: '黄埔区', duration: '1小时', cost: '¥50', icon: '🍜' },
          { time: '14:00', name: '返程', description: '带着回忆回家', location: '广州', duration: '', cost: '¥0', icon: '✈️' },
        ]
      }
    ]
  },
  {
    id: 3,
    name: '7天6晚全景游',
    description: '最全面的广州体验，错过任何一个角落',
    days: 7,
    nights: 6,
    rating: 5.0,
    price: '¥2500',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
    suitable: '时间充裕的深度游',
    highlights: ['所有经典景点', '周边城市佛山/顺德', '更多小众景点'],
    schedule: [
      { day: 1, theme: '经典初体验', activities: [] },
      { day: 2, theme: '岭南文化日', activities: [] },
      { day: 3, theme: '亲子欢乐日', activities: [] },
      { day: 4, theme: '温泉度假日', activities: [] },
      { day: 5, theme: '佛山顺德游', activities: [] },
      { day: 6, theme: '小众秘境探', activities: [] },
      { day: 7, theme: '完美收官', activities: [] },
    ]
  },
]

export default function ItineraryPage() {
  const [activeItinerary, setActiveItinerary] = useState(itineraries[0])
  const [selectedDay, setSelectedDay] = useState(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1567001909734-0c3e21c0c1cb?w=1920&q=80" 
            alt="广州行程"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">📅 广州行程</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl text-center">
            精选路线推荐，让旅行更轻松
          </p>
        </div>
      </div>

      {/* Itinerary Selection */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {itineraries.map((itinerary) => (
            <button
              key={itinerary.id}
              onClick={() => { setActiveItinerary(itinerary); setSelectedDay(1); }}
              className={`p-6 rounded-2xl text-left transition-all ${
                activeItinerary.id === itinerary.id
                  ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl'
                  : 'bg-white dark:bg-slate-800 hover:shadow-xl'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm opacity-80">{itinerary.days}天{itinerary.nights}晚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{itinerary.name}</h3>
              <p className={`text-sm mb-4 ${activeItinerary.id === itinerary.id ? 'text-white/80' : 'text-slate-500'}`}>
                {itinerary.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">{itinerary.rating}</span>
                </div>
                <span className="text-2xl font-bold">{itinerary.price}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Day Tabs */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">每日行程安排</h3>
          
          <div className="flex gap-2 flex-wrap mb-6">
            {activeItinerary.schedule.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedDay === day.day
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                第{day.day}天
              </button>
            ))}
          </div>

          {/* Day Activities */}
          {activeItinerary.schedule
            .filter(d => d.day === selectedDay)
            .map((day) => (
              <div key={day.day}>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white">
                    {day.day}
                  </span>
                  {day.theme}
                </h4>
                
                <div className="space-y-4">
                  {day.activities.length > 0 ? (
                    day.activities.map((activity, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:shadow-md transition-shadow">
                        <div className="text-3xl">{activity.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-sm font-medium">
                              {activity.time}
                            </span>
                            <h5 className="font-semibold">{activity.name}</h5>
                          </div>
                          <p className="text-slate-500 text-sm mb-2">{activity.description}</p>
                          <div className="flex gap-4 text-sm text-slate-400">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" /> {activity.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" /> {activity.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" /> {activity.cost}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-slate-400">
                      <div className="text-4xl mb-2">📝</div>
                      <p>详细行程待更新...</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Highlights */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">行程亮点</h3>
          <div className="flex gap-2 flex-wrap">
            {activeItinerary.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-600"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
