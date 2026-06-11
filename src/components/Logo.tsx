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
        {/* User Provided PNG Logo */}
        <div className="relative flex items-center justify-start w-32 sm:w-40 transition-transform group-hover:scale-105 drop-shadow-sm">
          <img src="/logo.png" alt="360payZ Logo" className="w-full h-auto object-contain" />
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
