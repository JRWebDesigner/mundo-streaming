'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Promotion } from '@/lib/supabase';

interface PromotionsSliderProps {
  promotions: Promotion[];
}

export function PromotionsSlider({ promotions }: PromotionsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (promotions.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  if (promotions.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950">
      <div className="relative h-[400px] md:h-[500px]">
        {promotions.map((promotion, index) => (
          <div
            key={promotion.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${promotion.image_url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929]/95 to-[#0A1929]/70" />
            </div>

            <div className="relative flex h-full items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl space-y-6">
                  <div className="inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    {promotion.discount_percentage}% de descuento
                  </div>
                  <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                    {promotion.title}
                  </h2>
                  <p className="text-xl text-gray-300 md:text-2xl">
                    {promotion.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8"
                  >
                    Ver Ofertas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-blue-400'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
