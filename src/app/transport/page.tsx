import Link from 'next/link'

const transportInfo = [
  { 
    icon: '✈️', 
    title: '飞机', 
    content: '广州白云国际机场是华南地区最大的航空枢纽，全国各地航班直达，全球多国航线便捷'
  },
  { 
    icon: '🚄', 
    title: '高铁/火车', 
    content: '广州南站是高铁枢纽，直达深圳、珠海、长沙、武汉等地，城市内地铁无缝衔接'
  },
  { 
    icon: '🚇', 
    title: '地铁', 
    content: '已开通15条线路，覆盖全城主要景点，票价2-15元，使用羊城通或手机扫码更便捷'
  },
  { 
    icon: '🚌', 
    title: '公交', 
    content: '线路密集，覆盖全城，票价1-2元，部分线路设 tourists 专线连接热门景点'
  },
  { 
    icon: '🚕', 
    title: '出租车/网约车', 
    content: '出租车起步价12元，网约车（滴滴、高德）价格透明，推荐使用'
  },
  { 
    icon: '🚢', 
    title: '水上巴士', 
    content: '珠江夜游白天也有航班，从天字码头出发，游览珠江美景，票价50-150元'
  },
]

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <header className="bg-gradient-to-r from-[#D35400] to-[#8B0000] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🚗 广州交通</h1>
          <p className="text-xl opacity-90">出行无忧，玩转羊城</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transportInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-5xl">{item.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-[#8B0000] mb-3">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-4">💡 出行小贴士</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• 推荐下载"广州地铁"APP，实时查看线路和到站信息</li>
            <li>• 办理羊城通交通卡，公交地铁通用，还有折扣优惠</li>
            <li>• 上下班高峰期（7:30-9:00，17:30-19:30）尽量避免地铁</li>
            <li>• 广州南站位于番禺区，距市中心较远，请预留充足时间</li>
            <li>• 支付宝/微信可直接刷地铁闸机，非常方便</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-block bg-[#D35400] text-white px-8 py-3 rounded-full hover:bg-[#8B0000] transition-colors">
            ← 返回首页
          </Link>
        </div>
      </main>
    </div>
  )
}
