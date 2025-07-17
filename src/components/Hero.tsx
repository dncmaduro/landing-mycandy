import Image from 'next/image';
import HeroImage from '@/assets/images/Hero.png';

export const Hero = () => {
  return (
    <div className="w-full relative aspect-[2/1] mt-1">
      <Image src={HeroImage.src} alt="Hero" fill className="object-cover" priority />
    </div>
  );
};
