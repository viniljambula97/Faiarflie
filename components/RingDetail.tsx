import React from 'react';
import { Button } from './Button';

export const RingDetail: React.FC = () => {
  // Pointing to the local file "ring.png". 
  // Ensure you add the image file to your project root and name it "ring.png".
  const ringImage = "./ring.png"; 

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ring-detail" className="py-12 md:py-24 bg-stone-50 text-loam-900 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs for Luxury Feel */}
        <div className="flex justify-end mb-12 text-[10px] uppercase tracking-[0.25em] text-loam-400 font-sans opacity-60">
            <span className="mx-2">Collection</span> / <span className="mx-2">The Artifact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* LEFT COLUMN: Main Product Image */}
            <div className="relative w-full aspect-square flex items-center justify-center p-8 lg:p-0">
                {/* 
                   mix-blend-multiply: blends white background into the stone-50 page background 
                   brightness-105 contrast-110: enhances the gold luster
                */}
                <img 
                    src={ringImage} 
                    alt="The Resurrection Ring - Solid 24k Gold" 
                    className="w-full h-full object-contain mix-blend-multiply brightness-105 contrast-110 drop-shadow-2xl animate-fade-in duration-1000 transform hover:scale-105 transition-transform"
                />
                
                {/* Decorative circle behind the ring to ground it */}
                <div className="absolute inset-0 bg-gradient-to-tr from-loam-200/20 to-transparent rounded-full blur-3xl -z-10 transform scale-75"></div>
            </div>

            {/* RIGHT COLUMN: Product Details */}
            <div className="flex flex-col space-y-10 pt-4 text-center lg:text-left">
                
                <div className="space-y-4">
                    <h1 className="font-serif text-5xl lg:text-7xl text-loam-900 leading-none">
                        The <br/>Resurrection
                    </h1>
                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-4">
                        <p className="font-sans text-xl text-loam-600 tracking-wide">
                            $8,888.00
                        </p>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-loam-400">
                            Solid 24k Gold Artifact
                        </span>
                    </div>
                </div>

                <div className="prose prose-stone text-loam-700 font-sans leading-loose text-sm max-w-md mx-auto lg:mx-0">
                    <p>
                        Forged from the purest 24k gold, this artifact is not merely jewelry; 
                        it is a spiritual instrument. The sacred mantra <span className="italic font-serif text-loam-900">"Om Namo Venkateshaya"</span> is 
                        deeply hand-engraved into the exterior band, serving as an eternal invocation of abundance, protection, and divine grace.
                    </p>
                    <p className="mt-4 text-xs text-loam-500 uppercase tracking-wider">
                        Weight: ~18 Grams &nbsp;|&nbsp; Width: 6mm &nbsp;|&nbsp; Finish: Brushed Satin or Mirror Polish
                    </p>
                </div>

                {/* Size Selector Mockup */}
                <div className="py-6 border-t border-b border-loam-200 w-full max-w-md mx-auto lg:mx-0">
                    <button className="flex items-center justify-between w-full text-left group hover:opacity-70 transition-opacity">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-loam-800">Select Ring Size</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-serif italic text-loam-500">Guide</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-loam-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Actions */}
                <div className="space-y-4 pt-2 w-full max-w-md mx-auto lg:mx-0">
                    <Button 
                        variant="primary" 
                        onClick={scrollToWaitlist} 
                        className="w-full py-6 text-xs tracking-[0.3em]"
                    >
                        Request Allocation
                    </Button>
                    <p className="text-center text-[10px] text-loam-400 italic font-serif">
                        Limited production. Waitlist active.
                    </p>
                </div>

                {/* Concierge Links */}
                <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-[10px] uppercase tracking-[0.15em] text-loam-800 font-bold">
                    <button className="hover:text-bronze-600 transition-colors border-b border-transparent hover:border-bronze-600 pb-1">
                        Concierge
                    </button>
                    <button className="hover:text-bronze-600 transition-colors border-b border-transparent hover:border-bronze-600 pb-1">
                        Authenticity
                    </button>
                    <button className="hover:text-bronze-600 transition-colors border-b border-transparent hover:border-bronze-600 pb-1">
                        Share
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};