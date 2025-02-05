'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const bannerImages = [
  '/valentine/1.webp',
  '/valentine/2.webp',
  '/valentine/3.webp',
  '/valentine/4.webp',
];

const mobileBannerImages = [
  '/mobile/1.webp',
  '/mobile/2.webp',
  '/mobile/3.webp',
  '/mobile/4.webp'
];

export default function BannerCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile banner */}
      <div className="sm:hidden p-4 justify-center items-center">
        <div className="relative w-full max-w-[375px] h-[192px] 
                      overflow-hidden rounded-xl 
                      shadow-[0_0_20px_rgba(255,182,193,0.5)]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {mobileBannerImages.map((image, index) => (
              <div key={`mobile-${index}`} className="flex-shrink-0 w-full h-[192px]">
                <Image
                  src={image}
                  alt={`Mobile Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={375}
                  height={192}
                  priority={index === 0}
                  quality={85}
                />
              </div>
            ))}
          </div>

          {/* Navigation dots for mobile */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {mobileBannerImages.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                          ${currentImageIndex === index 
                            ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                            : 'bg-white/40 hover:bg-white/60'}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop banner */}
      <div className="hidden sm:flex p-4 md:p-6 justify-center items-center">
        <div className="relative w-full max-w-[900px] h-[150px] md:h-[180px] 
                      overflow-hidden rounded-xl 
                      shadow-[0_0_20px_rgba(255,182,193,0.5)] 
                      before:content-[''] before:absolute before:inset-0 
                      before:bg-gradient-to-r before:from-pink-200/30 before:via-transparent before:to-rose-200/30 
                      before:pointer-events-none before:z-10">
          {/* Create two sets of images for smooth infinite loop */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {/* First set of images */}
            {bannerImages.map((image, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-full h-[280px] sm:h-[200px] md:h-[180px]">
                <Image
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={900}
                  height={180}
                  priority={index === 0}
                  quality={85}
                />
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 md:bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                          ${currentImageIndex === index 
                            ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                            : 'bg-white/40 hover:bg-white/60'}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
