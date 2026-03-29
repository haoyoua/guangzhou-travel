import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                广
              </div>
              <span className="text-xl font-bold">广州旅游网</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              探索千年商都，品味岭南风情。提供广州景点、美食、酒店、行程等全方位旅游攻略。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">微信</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48a.59.59 0 01-.812.385 10.17 10.17 0 01-.312-.18l-1.723.706a.59.59 0 01-.733-.75l2.388-9.023c-.496-.455-.8-1.088-.8-1.748 0-1.228.997-2.228 2.228-2.228.501 0 .97.167 1.343.452l1.39-1.582a.59.59 0 01 .753-.074 9.553 9.553 0 002.424.283c3.8 0 6.691-3.289 6.691-7.342 0-3.053-2.891-7.342-6.691-7.342z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">微博</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.098 19.581c2.214 0 4.378-.853 5.974-2.136-1.42-.587-3.217-1.43-4.378-2.135-.579.256-1.502.427-2.135.427-.634 0-1.342-.171-2.135-.427-1.161.705-2.958 1.548-4.378 2.135 1.596 1.283 3.76 2.136 5.974 2.136zm-4.377-2.565c1.806 0 3.449-.619 4.692-1.741-.771-.512-2.456-1.341-4.692-1.741-2.236.4-3.921 1.229-4.692 1.741 1.243 1.122 2.886 1.741 4.692 1.741zm1.283-2.608c1.064 0 1.984-.512 2.457-1.282-.771-.512-1.878-1.026-2.457-1.282-.579-.256-1.686-.77-2.457-1.282-.473.77-1.393 1.282-2.457 1.282s-1.984-.512-2.457-1.282c-.771.512-1.878 1.026-2.457 1.282-.579.256-1.686.77-2.457 1.282.473.77 1.393 1.282 2.457 1.282zm.64-2.136c1.515 0 2.879-.981 3.369-2.352-2.012-1.167-4.509-1.859-5.827-2.565-1.025 1.436-2.135 3.494-2.135 4.917 0 0 .579 0 1.513 0 .934 0 2.135-.769 3.08-.769z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/attractions" className="text-slate-400 hover:text-orange-400 transition-colors">景点推荐</Link></li>
              <li><Link href="/food" className="text-slate-400 hover:text-orange-400 transition-colors">美食攻略</Link></li>
              <li><Link href="/hotel" className="text-slate-400 hover:text-orange-400 transition-colors">酒店住宿</Link></li>
              <li><Link href="/transport" className="text-slate-400 hover:text-orange-400 transition-colors">交通指南</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>广州市天河区珠江新城</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@guangzhou.travel</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24小时服务</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>© 2026 广州旅游网. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
