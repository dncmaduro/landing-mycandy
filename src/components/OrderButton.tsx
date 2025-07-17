'use client';

import orderButton from '@/assets/images/orderbutton.webp';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const OrderButton = ({ className }: Props) => {
  const handleClick = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`flex w-full items-center justify-center ${className || ''}`}>
      <button onClick={() => handleClick()}>
        <Image src={orderButton.src} alt="Nút order" width={300} height={100} />
      </button>
    </div>
  );
};
