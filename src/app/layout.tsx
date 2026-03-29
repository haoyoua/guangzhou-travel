import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  title: '广州旅游网 - 探索千年商都，品味岭南风情',
  description: '广州旅游攻略，景点推荐，美食指南，酒店预订，行程规划。带您玩转广州，发现岭南之美。',
  keywords: '广州旅游，广州景点，广州美食，广州酒店，广州行程规划，岭南文化',
  openGraph: {
    title: '广州旅游网 - 探索千年商都',
    description: '广州旅游攻略，景点推荐，美食指南',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
