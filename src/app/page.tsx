import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PageCarousel } from '@/components/PageCarousel';

export default function Home() {
  return (
    <div className="font-sans bg-white items-center justify-items-center min-h-screen gap-16">
      <Header />
      <Hero />
      <PageCarousel />
    </div>
  );
}
