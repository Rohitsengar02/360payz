import React from 'react';
import Link from 'next/link';
import { Wallet } from 'lucide-react';

interface LogoProps {
  className?: string;
  withSlogan?: boolean;
  sloganClassName?: string;
  isDark?: boolean;
}

export default function Logo({ className = "", withSlogan = false, sloganClassName = "", isDark = false }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex flex-col ${className} hover:opacity-90 transition-opacity`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="flex items-center space-x-2 group cursor-pointer">
        {/* Custom SVG Wallet Icon Representation */}
        <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-105 drop-shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
            {/* Credit Card */}
            <g transform="translate(256, 210) rotate(-15) translate(-256, -210)">
              <rect x="120" y="90" width="280" height="170" rx="20" fill="#8B5CF6"/>
              <rect x="150" y="130" width="45" height="35" rx="6" fill="#C4B5FD" opacity="0.8"/>
              <path d="M350 120 A 30 30 0 0 1 350 150 M365 110 A 45 45 0 0 1 365 160 M380 100 A 60 60 0 0 1 380 170" stroke="#C4B5FD" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8"/>
              <line x1="150" y1="220" x2="200" y2="220" stroke="#C4B5FD" strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
              <line x1="215" y1="220" x2="265" y2="220" stroke="#C4B5FD" strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
              <line x1="280" y1="220" x2="330" y2="220" stroke="#C4B5FD" strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
            </g>
            
            {/* Wallet Back */}
            <rect x="50" y="200" width="412" height="240" rx="40" fill="#6D28D9"/>
            
            {/* Wallet Front Flap Outline / Shadow */}
            <path d="M 50 250 L 462 250 L 462 400 C 462 422 444 440 422 440 L 90 440 C 68 440 50 422 50 400 Z" fill="#5B21B6"/>
            {/* Wallet Front Flap */}
            <path d="M 50 250 L 462 250 L 462 310 C 462 340 360 370 256 370 C 152 370 50 340 50 310 Z" fill="#7C3AED"/>
            
            {/* Clasp */}
            <rect x="216" y="270" width="80" height="110" rx="30" fill="#7C3AED" stroke="#5B21B6" strokeWidth="8"/>
            <circle cx="256" cy="345" r="18" fill="#4C1D95"/>
            <circle cx="256" cy="345" r="10" fill="#8B5CF6"/>
          </svg>
        </div>
        
        {/* Text Logo: 360PayZ */}
        <div className="flex items-center font-black italic tracking-tighter text-3xl sm:text-4xl drop-shadow-sm">
          <span className="text-primary">360</span>
          <span className={isDark ? "text-white" : "text-neutral-900"}>pay</span>
          <span className="text-primary">Z</span>
        </div>
      </div>
      
      {/* Slogan */}
      {withSlogan && (
        <div className={`mt-1.5 flex items-center justify-center w-full space-x-2 sm:space-x-3 text-[10px] sm:text-xs font-semibold tracking-widest uppercase ${isDark ? "text-white/80" : "text-neutral-800"} ${sloganClassName}`}>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary"></div>
          <span className="whitespace-nowrap">Pay everything with credit cards.</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
      )}
    </Link>
  );
}
