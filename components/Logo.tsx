import React from 'react';

interface LogoProps {
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <div className="text-center select-none cursor-pointer">
      <h1 className={`font-display font-bold text-2xl md:text-3xl tracking-[0.2em] uppercase transition-colors duration-500 ${light ? 'text-stone-100' : 'text-loam-900'}`}>
        Resurrection.
      </h1>
    </div>
  );
};