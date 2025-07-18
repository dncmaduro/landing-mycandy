'use client';

import { useEffect, useState } from 'react';
import countdown from '@/assets/images/countdown.webp';
import Image from 'next/image';
import { OrderButton } from '../OrderButton';

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (): TimeLeft => {
  const now = new Date();
  const currentHour = now.getHours();

  let nextCheckpoint = 6;
  if (currentHour < 6) nextCheckpoint = 6;
  else if (currentHour < 12) nextCheckpoint = 12;
  else if (currentHour < 18) nextCheckpoint = 18;
  else nextCheckpoint = 24;

  let next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), nextCheckpoint, 0, 0, 0);
  if (nextCheckpoint === 24) {
    next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  }
  const diff = next.getTime() - now.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { hours, minutes, seconds };
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

  return (
    <div className="relative w-full" style={{ aspectRatio: '2/1' }}>
      <Image src={countdown.src} alt="Đếm ngược" fill className="object-cover" priority />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-center text-xl font-black tracking-widest text-white drop-shadow-lg md:text-6xl">
          {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
        </span>
      </div>
      <OrderButton className="absolute bottom-5" />
    </div>
  );
};
