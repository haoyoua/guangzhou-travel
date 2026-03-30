import type { Metadata, Viewport } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f97316',
}

export const metadata: Metadata = {
  title: {
    default: '广州旅游网 - 探索千年商都，品味岭南风情',
    template: '%s | 广州旅游网'
  },
  description: '广州旅游攻略，景点推荐，美食指南，酒店预订，行程规划。带您玩转广州，发现岭南之美。',
  keywords: ['广州旅游', '广州景点', '广州美食', '广州酒店', '广州行程规划', '岭南文化', '广州塔', '陈家祠', '白云山'],
  authors: [{ name: '广州旅游网' }],
  creator: '广州旅游网',
  publisher: '广州旅游网',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: '广州旅游网 - 探索千年商都',
    description: '广州旅游攻略，景点推荐，美食指南，酒店预订，行程规划',
    type: 'website',
    locale: 'zh_CN',
    siteName: '广州旅游网',
    url: 'https://guangzhou-travel.vercel.app',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551244026-bc622a711638?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '广州塔夜景',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '广州旅游网 - 探索千年商都',
    description: '广州旅游攻略，景点推荐，美食指南',
    images: ['https://images.unsplash.com/photo-1551244026-bc622a711638?w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://guangzhou-travel.vercel.app',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: '旅游',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="广州旅游" />
        <meta name="application-name" content="广州旅游" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
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
