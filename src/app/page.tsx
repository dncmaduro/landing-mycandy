import { Body } from '@/components/Body';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OrderButton } from '@/components/OrderButton';
import { PageCarousel } from '@/components/PageCarousel';

export default function Home() {
  return (
    <div className="h-screen items-center justify-items-center gap-16 bg-white font-sans">
      <Header />
      <Hero />
      <PageCarousel />
      <OrderButton />
      <Body />
    </div>
  );
}
