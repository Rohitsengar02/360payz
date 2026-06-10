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
        {/* 3D-like Wallet Icon Representation */}
        <div className="relative flex items-center justify-center">
          <Wallet className="w-8 h-8 sm:w-10 sm:h-10 text-primary drop-shadow-md transition-transform group-hover:scale-105" strokeWidth={1.5} />
          {/* Credit Card sticking out */}
          <div className="absolute -top-1 -right-1 w-4 h-3 sm:w-5 sm:h-3.5 bg-primary rounded-[2px] transform rotate-12 shadow-sm border border-white transition-transform group-hover:-translate-y-1 group-hover:rotate-6">
            <div className="absolute top-[2px] left-[2px] w-1.5 h-1 bg-white/40 rounded-[1px]"></div>
          </div>
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
