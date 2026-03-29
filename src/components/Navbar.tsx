"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, X, MapPin, Utensils, Building2, Route, BookOpen, Car, ChevronDown, Newspaper } from 'lucide-react'

const navLinks = [
  { name: '首页', href: '/', icon: MapPin },
  { name: '景点', href: '/attractions', icon: MapPin },
  { name: '美食', href: '/food', icon: Utensils },
  { name: '酒店', href: '/hotel', icon: Building2 },
  { name: '行程', href: '/itinerary', icon: Route },
  { name: '攻略', href: '/guide', icon: BookOpen },
  { name: '资讯', href: '/attractions/news', icon: Newspaper },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 搜索框打开时自动聚焦
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // 路由变化时关闭菜单
  useEffect(() => {
    setIsOpen(false)
    setSearchOpen(false)
  }, [pathname])

  // 处理搜索提交
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass py-2' 
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="主导航"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            aria-label="返回首页"
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
              <span className="relative z-10">广</span>
              {/* Logo动画背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 scale-0 group-hover:scale-150 bg-white/20 rounded-full transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient leading-tight">
                广州旅游
              </span>
              <span className="text-xs text-slate-500 -mt-1 hidden sm:block">
                探索千年商都
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActive 
                      ? 'text-orange-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </span>
                  {/* Hover背景 */}
                  <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* 下划线动画 */}
                  <span className="nav-link" />
                </Link>
              )
            })}
          </div>

          {/* 右侧操作区 */}
          <div className="flex items-center gap-2">
            {/* 搜索按钮 */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  searchOpen 
                    ? 'bg-orange-500/20 text-orange-400' 
                    : 'hover:bg-white/5 text-slate-300 hover:text-white'
                }`}
                aria-label={searchOpen ? '关闭搜索' : '打开搜索'}
                aria-expanded={searchOpen}
              >
                {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
              
              {/* 搜索框展开动画 */}
              <div className={`absolute right-0 top-full mt-2 transition-all duration-300 origin-top ${
                searchOpen 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索景点、美食..."
                    className="w-72 px-4 py-3 pl-11 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    aria-label="搜索"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    搜索
                  </button>
                </form>
              </div>
            </div>

            {/* CTA 按钮 */}
            <Link
              href="/itinerary"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 transition-all duration-300"
            >
              <Route className="w-4 h-4" />
              <span>规划行程</span>
            </Link>

            {/* 移动端菜单按钮 */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={isOpen}
            >
              <div className={`hamburger ${isOpen ? 'active' : ''}`}>
                <span className="bg-slate-300" />
                <span className="bg-slate-300" />
                <span className="bg-slate-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mt-2 mx-4 rounded-2xl glass overflow-hidden">
          {/* 移动端搜索框 */}
          <div className="p-4 border-b border-white/5">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索景点、美食..."
                  className="w-full px-4 py-3 pl-11 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50"
                  aria-label="搜索"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              </div>
            </form>
          </div>
          
          {/* 导航链接 */}
          <nav className="p-2" aria-label="移动端导航">
            {navLinks.map((link, index) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400' 
                      : 'hover:bg-white/5 text-slate-300'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-400" />
                  )}
                </Link>
              )
            })}
          </nav>
          
          {/* 移动端CTA */}
          <div className="p-4 border-t border-white/5">
            <Link
              href="/itinerary"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl active:scale-95 transition-transform"
            >
              <Route className="w-5 h-5" />
              <span>规划我的行程</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 搜索框展开时的遮罩 */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-[-1] bg-black/20 backdrop-blur-sm md:block hidden"
          onClick={() => setSearchOpen(false)}
        />
      )}
    </nav>
  )
}
