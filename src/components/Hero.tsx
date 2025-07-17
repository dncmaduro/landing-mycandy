import Image from 'next/image';
import HeroImage from '@/assets/images/Hero.webp';

export const Hero = () => {
  return (
    <div className="relative mt-1 aspect-[2/1] w-full">
      <Image src={HeroImage.src} alt="Hero" fill className="object-cover" priority />
    </div>
  );
};
