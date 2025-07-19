import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nunito } from 'next/font/google';
import { Toaster } from 'sonner';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bánh Trứng Chảy MyCandy Việt Nam - Đặt Hàng Online Giá Tốt Nhất',
  description:
    'Bánh trứng chảy MyCandy Việt Nam chính hãng, thơm ngon, giá tốt. Đặt hàng online nhanh chóng, giao hàng tận nơi. Khuyến mãi đặc biệt hôm nay!',
  keywords:
    'bánh trứng chảy, MyCandy Việt Nam, bánh trứng chảy MyCandy, đặt bánh online, bánh ngon Việt Nam, bánh trứng chảy giá rẻ',
  authors: [{ name: 'MyCandy Việt Nam' }],
  creator: 'MyCandy Việt Nam',
  publisher: 'MyCandy Việt Nam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mycandyvn.com'),
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/',
    },
  },
  openGraph: {
    title: 'Bánh Trứng Chảy MyCandy Việt Nam - Đặt Hàng Online',
    description:
      'Bánh trứng chảy MyCandy Việt Nam chính hãng, thơm ngon, giá tốt. Đặt hàng online nhanh chóng, giao hàng tận nơi.',
    url: 'https://mycandyvn.com',
    siteName: 'MyCandy Việt Nam',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bánh trứng chảy MyCandy Việt Nam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bánh Trứng Chảy MyCandy Việt Nam - Đặt Hàng Online',
    description:
      'Bánh trứng chảy MyCandy Việt Nam chính hãng, thơm ngon, giá tốt. Đặt hàng online nhanh chóng.',
    images: ['/og-image.jpg'],
    creator: '@mycandyvn',
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007edd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${nunito.variable} antialiased`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
