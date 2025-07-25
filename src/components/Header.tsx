'use client';

import { useEffect, useState } from 'react';
import Logo from '@/assets/images/Logo.webp';
import Chietkhau from '@/assets/images/Chietkhau.webp';
import Muangay from '@/assets/images/Muangay.webp';
import Image from 'next/image';

export const Header = () => {
  const [showChietkhau, setShowChietkhau] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowChietkhau((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 flex h-[85px] w-full items-center justify-between bg-gradient-to-r from-[#a5d4f8] to-[#007edd] px-4 shadow-lg/10">
      <Image
        src={Logo.src}
        alt="Logo MyCandy Việt Nam - Thương hiệu bánh trứng chảy uy tín"
        width={100}
        height={100}
      />
      <button onClick={handleClick} aria-label="Đặt hàng bánh trứng chảy MyCandy">
        {showChietkhau ? (
          <Image
            src={Chietkhau.src}
            alt="Khuyến mãi chiết khấu đặc biệt bánh trứng chảy MyCandy"
            width={260}
            height={260}
            className="ml-auto"
          />
        ) : (
          <Image
            src={Muangay.src}
            alt="Mua ngay bánh trứng chảy MyCandy với giá ưu đãi"
            width={260}
            height={260}
            className="ml-auto"
          />
        )}
      </button>
    </header>
  );
};
