'use client'

import { MapPin, Navigation } from 'lucide-react'

interface MapEmbedProps {
  address?: string
  lat?: number
  lng?: number
}

export default function MapEmbed({ address, lat = 23.1291, lng = 113.2644 }: MapEmbedProps) {
  // 使用高德地图或百度地图的静态图 API
  // 这里使用占位符，实际部署时替换为真实地图 API
  
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-2" />
          <p className="text-slate-400 text-sm">{address || '广州市'}</p>
          <p className="text-xs text-slate-500 mt-1">
            坐标: {lat.toFixed(4)}, {lng.toFixed(4)}
          </p>
        </div>
        
        {/* 模拟地图网格 */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="p-3 flex items-center justify-between bg-slate-700/50">
        <span className="text-sm text-slate-300 flex items-center gap-2">
          <Navigation className="w-4 h-4 text-orange-500" />
          导航
        </span>
        <a 
          href={`https://map.baidu.com/search/${encodeURIComponent(address || '广州市')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-orange-400 hover:text-orange-300"
        >
          查看地图 →
        </a>
      </div>
    </div>
  )
}
