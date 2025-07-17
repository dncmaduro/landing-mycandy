'use client';

import { useEffect, useState } from 'react';
import countdown from '@/assets/images/countdown.png';
import Image from 'next/image';
import { OrderButton } from '../OrderButton';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (): TimeLeft => {
  const now = new Date();
  const end = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
  const diff = end.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const pad = (num: number): string => num.toString().padStart(2, '0');

export const Countdown = () => {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showHMS = time.days === 0;

  return (
    <div className="relative w-full" style={{ aspectRatio: '2/1' }}>
      <Image src={countdown.src} alt="Đếm ngược" fill className="object-cover" priority />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showHMS ? (
          <span className="text-center text-xl font-black tracking-widest text-white drop-shadow-lg md:text-6xl">
            {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
          </span>
        ) : (
          <span className="text-center text-xl font-black tracking-wide text-white drop-shadow-lg md:text-5xl">
            {time.days} ngày, {time.hours} giờ
          </span>
        )}
      </div>
      <OrderButton className="absolute bottom-5" />
    </div>
  );
};
