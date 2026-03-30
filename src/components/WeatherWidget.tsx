'use client'

import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react'

interface WeatherData {
  temp: number
  condition: string
  humidity: number
  windSpeed: number
  icon: string
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟天气数据（实际项目可接入真实天气 API）
    const mockWeather: WeatherData = {
      temp: 26,
      condition: '多云',
      humidity: 78,
      windSpeed: 12,
      icon: 'cloud'
    }
    
    setTimeout(() => {
      setWeather(mockWeather)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="bg-slate-800 rounded-xl p-4 animate-pulse">
        <div className="h-20 bg-slate-700 rounded"></div>
      </div>
    )
  }

  const getWeatherIcon = () => {
    switch (weather?.icon) {
      case 'sun': return <Sun className="w-12 h-12 text-yellow-400" />
      case 'rain': return <CloudRain className="w-12 h-12 text-blue-400" />
      default: return <Cloud className="w-12 h-12 text-slate-400" />
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">广州今日天气</p>
          <p className="text-3xl font-bold">{weather?.temp}°C</p>
          <p className="text-sm">{weather?.condition}</p>
        </div>
        {getWeatherIcon()}
      </div>
      <div className="flex gap-4 mt-3 pt-3 border-t border-white/20 text-sm">
        <span className="flex items-center gap-1">
          <Droplets className="w-4 h-4" /> {weather?.humidity}%
        </span>
        <span className="flex items-center gap-1">
          <Wind className="w-4 h-4" /> {weather?.windSpeed}km/h
        </span>
      </div>
    </div>
  )
}
