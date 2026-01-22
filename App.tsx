import React, { useEffect, useState } from 'react';
import { Logo } from './components/Logo';
import { ProductHero } from './components/ProductHero'; 
import { RingDetail } from './components/RingDetail';
import { WaitlistForm } from './components/WaitlistForm';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 text-loam-900 selection:bg-loam-900 selection:text-stone-100 font-sans">
      
      {/* Navigation - Fixed Transparent Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled ? 'py-4 bg-loam-900/95 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="hidden md:block w-20">{/* Spacer */}</div>
            
            {/* Logo Logic: Dark (light={false}) when transparent/top, Light (light={true}) when scrolled/dark bg */}
            <Logo light={scrolled} /> 
            
            <div className="hidden md:flex gap-6 w-20 justify-end">
                <button className={`hover:opacity-70 transition-colors ${scrolled ? 'text-stone-100' : 'text-loam-900'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </button>
            </div>
        </div>
      </header>

      <main>
        {/* Section 1: Lifestyle Hero */}
        <ProductHero />

        {/* Section 2: Product Detail (The Ring) */}
        <RingDetail />

        {/* Section 3: Waitlist */}
        <section id="waitlist" className="py-32 bg-stone-200 border-t border-stone-300">
          <div className="container mx-auto px-6">
             <div className="mb-12 text-center">
               <h3 className="font-serif text-3xl text-loam-900 mb-4">
                 Join the Waitlist
               </h3>
               <p className="font-sans text-loam-600 text-sm tracking-widest uppercase">
                 Strictly Limited Availability
               </p>
             </div>
             <WaitlistForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-loam-900 border-t border-loam-800">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <div className="font-display font-bold text-stone-200 text-lg uppercase tracking-widest">
            Resurrection.
          </div>
          <div className="text-loam-400 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Resurrection Jewelry.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;