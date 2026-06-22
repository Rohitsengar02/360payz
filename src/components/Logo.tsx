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
        <div className="relative flex items-center justify-start h-12 sm:h-16 transition-transform group-hover:scale-105 drop-shadow-sm">
          <img src="/logo.png" alt="360payZ Logo" className="w-auto h-full object-contain" />
        </div>
      </div>
      
     
    </Link>
  );
}
