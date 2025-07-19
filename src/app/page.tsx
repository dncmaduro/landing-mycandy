import { Body } from '@/components/Body';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OrderButton } from '@/components/OrderButton';
import { PageCarousel } from '@/components/PageCarousel';

export default function Home() {
  return (
    <div className="h-screen items-center justify-items-center gap-16 bg-white font-sans">
      <Header />
      <main>
        <h1 className="sr-only">Bánh Trứng Chảy MyCandy Việt Nam - Đặt Hàng Online Chính Hãng</h1>
        <Hero />
        <section aria-label="Hình ảnh sản phẩm bánh trứng chảy">
          <PageCarousel />
        </section>
        <OrderButton />
        <Body />
      </main>
      <Footer />
    </div>
  );
}
