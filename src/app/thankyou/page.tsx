import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Thankyou } from '@/components/Thankyou';

export default function Home() {
  return (
    <div className="flex h-[90vh] flex-col bg-white font-sans">
      <Header />
      <Thankyou />
      <Footer />
    </div>
  );
}
