import React from 'react';

const CornerSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute w-12 h-12 text-[#D3A548] ${className || ''}`}>
    {/* Outer corner line */}
    <path d="M 5 55 L 5 5 L 55 5" stroke="currentColor" strokeWidth="1.5" />
    {/* Inner decorative bracket */}
    <path d="M 20 40 L 20 20 L 40 20" stroke="currentColor" strokeWidth="2" />
    {/* Diagonal arrow */}
    <path d="M 20 20 L 32 32" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 28 32 L 32 32 L 32 28" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Small accent circles */}
    <circle cx="5" cy="55" r="1.5" fill="currentColor" />
    <circle cx="55" cy="5" r="1.5" fill="currentColor" />
    <circle cx="20" cy="40" r="1.5" fill="currentColor" />
    <circle cx="40" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

export default function ArtDecoFrame({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative p-3 ${className}`}>
      {/* Outer border */}
      <div className="absolute inset-0 border border-[#D3A548]/30 pointer-events-none"></div>
      
      {/* 4 Corners */}
      <CornerSVG className="top-[-5px] left-[-5px]" />
      <CornerSVG className="top-[-5px] right-[-5px] rotate-90" />
      <CornerSVG className="bottom-[-5px] right-[-5px] rotate-180" />
      <CornerSVG className="bottom-[-5px] left-[-5px] -rotate-90" />
      
      {/* Content wrapper */}
      <div className="relative w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
