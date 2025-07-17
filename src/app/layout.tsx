import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nunito } from 'next/font/google';
import { Toaster } from 'sonner';

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
  title: 'Bánh trứng chảy MyCandy Việt Nam',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunito.variable} antialiased`}>{children}</body>
      <Toaster richColors position="top-center" />
    </html>
  );
}
