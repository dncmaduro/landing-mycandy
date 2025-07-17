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

  return (
    <div className="sticky top-0 z-50 flex h-[85px] w-full items-center justify-between bg-gradient-to-r from-[#a5d4f8] to-[#007edd] px-4 shadow-lg/10">
      <Image src={Logo.src} alt="Logo" width={100} height={100} />
      {showChietkhau ? (
        <Image src={Chietkhau.src} alt="Chietkhau" width={260} height={260} className="ml-auto" />
      ) : (
        <Image src={Muangay.src} alt="Muangay" width={260} height={260} className="ml-auto" />
      )}
    </div>
  );
};
