import React from 'react';
import { Button } from './Button';

export const ProductHero: React.FC = () => {
  // Static high-end background
  const bgUrl = "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2500";

  const handleInteraction = () => {
    document.getElementById('ring-detail')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-stone-100">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
          <img 
            src={bgUrl} 
            alt="Atmosphere" 
            className="w-full h-full object-cover opacity-60 animate-fade-in"
          />
        {/* Light Earthy Gradient to ensure text visibility at bottom/center without being too dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100/10 via-stone-100/20 to-stone-100/80"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-12 flex flex-col items-center h-full justify-center">
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-loam-900 mb-12 leading-tight tracking-tight opacity-100 drop-shadow-sm">
          Om Namo <br /> Venkateshaya
        </h1>

        <div className="animate-slide-up pt-4">
            <div className="flex justify-center">
                <Button onClick={handleInteraction} variant="primary">
                    View The Offering
                </Button>
            </div>
        </div>
      </div>
      
    </section>
  );
};