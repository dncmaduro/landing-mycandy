'use client';

import carousel1 from '@/assets/images/carousel1.png';
import carousel2 from '@/assets/images/carousel2.png';
import carousel3 from '@/assets/images/carousel3.png';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export const PageCarousel = () => {
  const carouselImages = [carousel1, carousel2, carousel3, carousel1, carousel2, carousel3];
  const autoplay = Autoplay({ delay: 1500, stopOnInteraction: false });

  return (
    <div className="my-2 w-full">
      <Carousel
        plugins={[autoplay]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-2"
      >
        <CarouselContent>
          {carouselImages.map((car, idx) => (
            <CarouselItem className="basis-1/3" key={idx}>
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
    </div>
  );
};
