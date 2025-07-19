'use client';

import fb1 from '@/assets/images/fb1.webp';
import fb2 from '@/assets/images/fb2.webp';
import fb3 from '@/assets/images/fb3.webp';
import fb4 from '@/assets/images/fb4.webp';
import fb5 from '@/assets/images/fb5.webp';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export const Feedback = () => {
  const carouselImages = [fb1, fb2, fb3, fb4, fb5];
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false });

  return (
    <section className="flex flex-col gap-1">
      <div className="h-1 w-full bg-white"></div>
      <div className="flex w-full items-center justify-center bg-white py-4">
        <h2 className="text-center text-xl font-black text-[#ff3f00] uppercase">
          Feedback của khách hàng về bánh trứng chảy MyCandy
        </h2>
      </div>
      <div className="h-1 w-full bg-white"></div>
      <Carousel
        plugins={[autoplay]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-2 mt-6"
      >
        <CarouselContent>
          {carouselImages.map((car, idx) => (
            <CarouselItem className="basis-1/2" key={idx}>
              <div
                className="relative w-full"
                style={{ aspectRatio: `${car.width}/${car.height}` }}
              >
                <Image
                  src={car}
                  alt="Ảnh bánh trứng chảy"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
