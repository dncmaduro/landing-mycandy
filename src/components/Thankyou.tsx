'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Home } from 'lucide-react';
import thank from '@/assets/images/thankyou.webp';

export const Thankyou = () => {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="relative w-full" style={{ aspectRatio: '2/1' }}>
        <Image src={thank.src} alt="Cảm ơn" fill className="object-cover" priority />
        <div className="absolute -bottom-10 flex w-full flex-col items-center justify-center">
          <button
            className="mt-10 flex items-center gap-2 rounded-full border-2 border-[#007edd] bg-white/80 px-8 py-3 text-lg font-bold text-[#007edd] shadow-xl backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-[#007edd] hover:text-white md:text-2xl"
            onClick={() => router.push('/')}
          >
            <Home className="h-6 w-6" />
            Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};
